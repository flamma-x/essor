"""One-off script to derive optimized web assets from the raw source photos/logo.
Run with: python process_images.py
"""
from PIL import Image
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.dirname(os.path.abspath(__file__))
IMG = os.path.join(ROOT, "assets", "images")


def save_pair(im, base_path, quality=78):
    """Save a WebP + JPEG pair (JPEG as a universal fallback)."""
    rgb = im.convert("RGB")
    rgb.save(base_path + ".webp", "WEBP", quality=quality, method=6)
    rgb.save(base_path + ".jpg", "JPEG", quality=quality, optimize=True, progressive=True)


def make_logo():
    im = Image.open(os.path.join(SRC, "logo-source.png")).convert("RGBA")
    # Trim stray 1px scan-border lines at the very top/bottom of the source.
    w0, h0 = im.size
    trim = int(h0 * 0.012)
    im = im.crop((0, trim, w0, h0 - trim))

    # Crop the near-white padding, then make the white background transparent
    # (the artwork is a flat-color badge with black linework, so a simple
    # luminance threshold works cleanly).
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if r > 235 and g > 235 and b > 235:
                px[x, y] = (r, g, b, 0)

    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)

    # Square canvas with a little breathing room
    size = max(im.size)
    pad = int(size * 0.04)
    canvas = Image.new("RGBA", (size + pad * 2, size + pad * 2), (0, 0, 0, 0))
    canvas.paste(im, (pad + (size - im.size[0]) // 2, pad + (size - im.size[1]) // 2), im)

    for name, px_size in [("logo", 512), ("logo-sm", 160), ("favicon-src", 256)]:
        resized = canvas.resize((px_size, px_size), Image.LANCZOS)
        resized.save(os.path.join(IMG, "brand", f"{name}.png"), "PNG", optimize=True)

    # Flattened white-background JPEG for places needing solid backgrounds (e.g. og:image)
    flat = Image.new("RGB", canvas.size, (255, 255, 255))
    flat.paste(canvas, (0, 0), canvas)
    flat.save(os.path.join(IMG, "brand", "logo-flat.jpg"), "JPEG", quality=90)


def make_event(src_name, out_name, max_w_full=1600, max_w_thumb=640):
    im = Image.open(os.path.join(SRC, src_name))
    im = im.convert("RGB")

    # Full size (for lightbox / detail)
    full = im.copy()
    full.thumbnail((max_w_full, max_w_full * 2), Image.LANCZOS)
    save_pair(full, os.path.join(IMG, "events", out_name), quality=76)

    # Thumbnail (for grid cards)
    thumb = im.copy()
    thumb.thumbnail((max_w_thumb, max_w_thumb * 2), Image.LANCZOS)
    save_pair(thumb, os.path.join(IMG, "events", out_name + "-thumb"), quality=72)


def make_founder():
    """Optimize the founder portrait if a source file is present.
    Accepts founder-source.{jpg,jpeg,png}. Portrait orientation.
    """
    src = None
    for ext in ("jpg", "jpeg", "png"):
        candidate = os.path.join(SRC, "founder-source." + ext)
        if os.path.exists(candidate):
            src = candidate
            break
    if not src:
        print("  (no founder-source image found — skipping founder portrait)")
        return

    im = Image.open(src).convert("RGB")
    # The provided source is a seated candid; crop to a dignified
    # head-and-shoulders portrait (removes the lower half of the frame).
    # This box is tuned to the current 4092x5288 source — adjust if the
    # source photo is ever replaced with a different one.
    if im.size == (4092, 5288):
        im = im.crop((1018, 10, 3275, 3050))
    portrait = im.copy()
    portrait.thumbnail((850, 1200), Image.LANCZOS)
    save_pair(portrait, os.path.join(IMG, "brand", "founder"), quality=84)
    print("  founder portrait optimized ->", os.path.join(IMG, "brand", "founder.webp"))


if __name__ == "__main__":
    os.makedirs(os.path.join(IMG, "brand"), exist_ok=True)
    os.makedirs(os.path.join(IMG, "events"), exist_ok=True)

    make_logo()
    make_event("event1-source.png", "event-independence-day-1")
    make_event("event2-source.png", "event-independence-day-2")
    make_founder()

    print("Done. Output written to", IMG)
