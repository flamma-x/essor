/* =========================================================
   Essor School — i18n / language switching system
   Arabic (ar / RTL) is the default. English (en / LTR) is a
   full translation, not a mirror — every string below has an
   AR and EN version, and the whole layout switches direction
   via [dir] + CSS logical properties (see style.css).

   To edit ANY text on the site, edit the dictionary below —
   the HTML pages only ever reference keys like "nav.home".
   ========================================================= */

(function () {
  "use strict";

  var STORAGE_KEY = "essor-lang";

  var translations = {
    ar: {
      meta: { siteName: "مدرسة الانطلاقة", siteNameEn: "Essor School" },

      nav: {
        home: "الرئيسية",
        about: "عن المدرسة",
        events: "الفعاليات",
        articles: "المقالات",
        contact: "تواصل معنا"
      },

      common: {
        langSwitch: "English",
        readMore: "اقرأ المزيد",
        viewAll: "عرض الكل",
        learnMore: "اكتشف المزيد",
        backHome: "العودة للرئيسية",
        toTop: "العودة للأعلى"
      },

      footer: {
        about: "مدرسة الانطلاقة تلتزم بتقديم تعليمٍ متميز، يجمع بين الأصالة والحداثة لبناء جيل واعٍ وقادر على قيادة المستقبل.",
        quickLinks: "روابط سريعة",
        contactInfo: "معلومات التواصل",
        followUs: "تابعونا",
        address: "[العنوان الكامل للمدرسة]، لبنان",
        phone: "+961 XX XXX XXX",
        email: "info@essor-school.com",
        rights: "© 2026 مدرسة الانطلاقة. جميع الحقوق محفوظة.",
        madeWith: "صُمم بعناية من أجل جيل الغد"
      },

      home: {
        hero: {
          badge: "تعليمٌ نوعيٌّ موثوق منذ سنوات",
          title: "انطلاقةٌ نحو <span>التميّز</span> والمعرفة",
          lead: "في مدرسة الانطلاقة، نؤمن بأن التعليم رحلة تبني الإنسان قبل أن تبني المتعلّم. بيئة تربوية آمنة، مناهج حديثة، وكادر متمكّن يرافق أبناءكم خطوة بخطوة.",
          ctaPrimary: "اكتشف المدرسة",
          ctaSecondary: "تواصل معنا",
          stat1Num: "+15", stat1Label: "عاماً من الخبرة",
          stat2Num: "+500", stat2Label: "طالب وطالبة",
          stat3Num: "+40", stat3Label: "معلم ومعلمة",
          stat4Num: "+100", stat4Label: "منحة مجانية"
        },
        highlights: {
          eyebrow: "لماذا الانطلاقة",
          title: "تجربة تعليمية متكاملة",
          subtitle: "نجمع بين القيم الأصيلة والأساليب التربوية الحديثة لنمنح كل طالب فرصة حقيقية للنمو والتميّز.",
          item1title: "تعليمٌ نوعيٌّ متكامل", item1text: "مناهج حديثة ومتوازنة تبني أساساً معرفياً متيناً وتفتح آفاقاً واسعة أمام طلابنا.",
          item2title: "كادر تربوي متمكّن", item2text: "معلمون وإداريون مؤهلون يواكبون أحدث طرق التعليم والتوجيه.",
          item3title: "بيئة آمنة وداعمة", item3text: "مساحة يشعر فيها كل طالب بالانتماء والاهتمام والرعاية.",
          item4title: "أنشطة ومهارات حياتية", item4text: "برامج لامنهجية ورياضية وفنية تنمّي شخصية الطالب المتكاملة."
        },
        aboutTeaser: {
          eyebrow: "عن مدرستنا",
          title: "قصة بُنيت على شغف التعليم",
          text: "منذ تأسيسها، سعت مدرسة الانطلاقة إلى أن تكون بيتاً ثانياً لأبنائها، تجمع بين قيم مجتمعنا وأحدث أساليب التعلّم العالمية، لتخرّج أجيالاً واثقة وقادرة على الإبداع.",
          cta: "تعرف على تاريخنا ورسالتنا"
        },
        eventsTeaser: {
          eyebrow: "لحظات من مدرستنا",
          title: "أحدث الفعاليات",
          subtitle: "نلتقي في مناسبات وطنية وتربوية تعزّز روح الانتماء لدى طلابنا.",
          cta: "جميع الفعاليات"
        },
        cta: {
          title: "هل تريدون الانضمام إلى عائلة الانطلاقة؟",
          text: "تواصلوا معنا اليوم لمعرفة المزيد عن التسجيل، البرامج التعليمية، وجولة تعريفية داخل حرم المدرسة.",
          primary: "سجّل اهتمامك", secondary: "اتصل بنا"
        }
      },

      about: {
        hero: { eyebrow: "عن المدرسة", title: "قصتنا، رسالتنا، وقيمنا", lead: "رحلة من العطاء التربوي بدأت بحلمٍ بسيط: أن نصنع فرقاً حقيقياً في حياة كل طالب." },
        founder: {
          eyebrow: "المؤسِّس",
          name: "العميد خالد ضاهر",
          role: "مؤسِّس المدرسة",
          p1: "وُلد العميد خالد ضاهر في جبل أكروم بعكار، وهي منطقة لطالما حلم أبناؤها بفرصٍ تعليمية أفضل. وبعد مسيرةٍ مشرّفة في صفوف الجيش برتبة ضابط، لم يفارقه حلمٌ واحد: أن يمنح أبناء منطقته التعليم الذي يستحقونه.",
          p2: "في عام 1998، حوّل هذا الحلم إلى واقع بتأسيس مدرسة الانطلاقة، إيماناً منه بأن التعليم هو الطريق الحقيقي لنهضة أبناء عكار وجبل أكروم. وما تزال رؤيته حتى اليوم حجر الأساس الذي تُبنى عليه رسالة المدرسة.",
          quote: "«التعليم هو أثمن ما نتركه لأبنائنا، وأصدق طريقٍ نحو مستقبلٍ أفضل.»"
        },
        achievements: {
          eyebrow: "أثرنا في المجتمع",
          title: "إنجازاتٌ نفخر بها",
          subtitle: "منذ انطلاقتها، لم تكن مدرسة الانطلاقة مجرّد صفوفٍ ومقاعد، بل رسالةً إنسانيةً وتربويةً تركت أثراً حقيقياً في حياة المئات.",
          a1title: "تعليمٌ مجاني لغير القادرين",
          a1text: "فتحنا قسماً مجانياً يستقبل الطلاب من العائلات غير القادرة على تحمّل تكاليف التعليم، إيماناً منّا بأن العلم حقٌّ للجميع لا امتيازٌ للبعض.",
          a2title: "احتضان أبناء اللاجئين السوريين",
          a2text: "خلال سنوات الحرب، افتتحنا قسماً خاصاً لتعليم أبناء اللاجئين السوريين، لنمنحهم مقعداً آمناً وفرصةً لمواصلة تعلّمهم رغم قسوة الظروف.",
          a3title: "خرّيجون في أرقى المهن",
          a3text: "تخرّج من صفوف مدرستنا أطباء وأصحاب اختصاصاتٍ مرموقة، يحملون اسم مدرستهم الأولى بفخرٍ أينما حلّوا.",
          a4title: "بيتٌ لأبناء المنطقة",
          a4text: "بقيت المدرسة على مدى السنوات صرحاً تربوياً تثق به مئات العائلات في عكار وجبل أكروم."
        },
        history: {
          eyebrow: "تاريخنا", title: "محطات في مسيرة الانطلاقة",
          text: "على مدى السنوات، نمت مدرستنا من فكرة صغيرة إلى صرح تربوي يثق به مئات الأهالي، دون أن تحيد يوماً عن رسالتها الأساسية: طالب واثق، متعلّم، ومنتمٍ لمجتمعه.",
          item1year: "التأسيس", item1title: "انطلاقة الحلم", item1text: "افتتاح المدرسة بصفوفها الأولى، بإيمان راسخ برسالة التعليم.",
          item2year: "التوسّع", item2title: "نمو الحرم المدرسي", item2text: "إضافة مبانٍ ومرافق جديدة لمواكبة العدد المتزايد من الطلاب.",
          item3year: "تطوير المناهج", item3title: "تعزيز المنهاج", item3text: "تحديث المناهج والمرافق التعليمية بما يواكب المعايير الحديثة.",
          item4year: "اليوم", item4title: "صرح تربوي رائد", item4text: "مدرسة الانطلاقة اليوم بيت تربوي وتعليمي لمئات العائلات."
        },
        mission: {
          eyebrow: "رسالتنا ورؤيتنا", title: "قيم نؤمن بها",
          subtitle: "كل ما نقوم به في مدرسة الانطلاقة ينطلق من مجموعة قيم راسخة توجّه قراراتنا اليومية.",
          v1title: "التميّز الأكاديمي", v1text: "نسعى دوماً لأعلى معايير الجودة التعليمية في كل مادة وصف.",
          v2title: "النزاهة والاحترام", v2text: "نزرع في طلابنا قيم الصدق والاحترام المتبادل.",
          v3title: "روح الانتماء", v3text: "مجتمع مدرسي متماسك يشعر فيه الجميع بالأمان والدعم.",
          v4title: "الإبداع والابتكار", v4text: "نشجّع الفضول والتفكير النقدي في كل مرحلة من التعلّم."
        },
        staff: {
          eyebrow: "فريقنا", title: "كادرنا التربوي والإداري",
          subtitle: "نخبة من المعلمين والإداريين ذوي الخبرة، ملتزمون برعاية كل طالب بعناية فردية.",
          role1: "المدير العام", role2: "الموجّهة التربوية", role3: "منسّق الأنشطة", role4: "منسّقة المرحلة الابتدائية",
          placeholderName: "سيُضاف قريباً",
          note: "* سيتم تحديث هذا القسم بصور وأسماء الكادر التربوي قريباً."
        },
        facilities: {
          eyebrow: "مرافقنا", title: "بيئة تعليمية مجهّزة بالكامل",
          subtitle: "مساحات مصمّمة لدعم التعلّم النشط والأنشطة اللامنهجية على حدّ سواء.",
          f1title: "صفوف حديثة", f1text: "صفوف مضاءة جيداً ومجهزة بوسائل تعليمية تفاعلية.",
          f2title: "مكتبة المدرسة", f2text: "مساحة غنية بالكتب والمراجع لتنمية حب القراءة والاطّلاع.",
          f3title: "ملعب وأنشطة رياضية", f3text: "مساحات خارجية آمنة للعب والأنشطة الرياضية الجماعية.",
          f4title: "قاعة الأنشطة", f4text: "قاعة متعددة الاستخدامات للفعاليات والمناسبات المدرسية."
        }
      },

      events: {
        hero: { eyebrow: "الفعاليات", title: "لحظات نفخر بها", lead: "من الاحتفالات الوطنية إلى الأنشطة التربوية، هنا نوثّق أجمل لحظات مدرستنا." },
        filters: { all: "الكل", celebrations: "احتفالات", academic: "أكاديمية", sports: "رياضية" },
        loadMore: "عرض المزيد",
        e1title: "احتفال عيد الاستقلال اللبناني", e1text: "شارك طلابنا بحماس في احتفالية عيد الاستقلال، بأزياء وطنية ورموز تعبّر عن الانتماء والفخر.",
        e2title: "حفل عيد الاستقلال داخل المدرسة", e2text: "فقرات غنائية واستعراضية أحياها طلابنا احتفاءً بالعلم والوطن ضمن أجواء مدرسية مبهجة.",
        e3title: "يوم رياضي مفتوح", e3text: "فعالية سنوية تجمع الطلاب في مسابقات رياضية جماعية تعزز روح الفريق. (قريباً)",
        e4title: "معرض العلوم السنوي", e4text: "مشاريع طلابية مبتكرة تُعرض أمام الأهالي والزملاء. (قريباً)",
        e5title: "اجتماع أولياء الأمور", e5text: "لقاء دوري لمناقشة التقدّم الأكاديمي والتربوي لأبنائنا. (قريباً)",
        comingSoon: "قريباً",
        videoNote: "سيتم إضافة مقاطع فيديو من الفعاليات هنا قريباً."
      },

      articles: {
        hero: { eyebrow: "المقالات", title: "أخبار ومقالات المدرسة", lead: "آخر الأخبار، الإعلانات، والمقالات التربوية من مدرسة الانطلاقة." },
        filters: { all: "الكل", news: "أخبار", announcements: "إعلانات", studentLife: "حياة الطلاب" },
        a1tag: "إعلان", a1title: "فتح باب التسجيل للعام الدراسي الجديد", a1excerpt: "بدأت مدرسة الانطلاقة استقبال طلبات التسجيل للعام الدراسي المقبل لجميع المراحل.",
        a2tag: "حياة الطلاب", a2title: "طلابنا يحتفلون بعيد الاستقلال", a2excerpt: "فعالية مدرسية مميزة أحيت روح الانتماء الوطني لدى طلاب جميع المراحل.",
        a3tag: "أخبار", a3title: "ورشة عمل حول أساليب التعلّم الحديثة", a3excerpt: "شارك كادرنا التعليمي في ورشة تدريبية لتطوير أساليب التدريس التفاعلية.",
        a4tag: "إعلان", a4title: "جدول الأنشطة اللامنهجية لهذا الفصل", a4excerpt: "تفاصيل الأنشطة الرياضية والفنية المتاحة لطلاب المدرسة هذا الفصل.",
        author: "إدارة المدرسة", minRead: "دقائق قراءة"
      },

      contact: {
        hero: { eyebrow: "تواصل معنا", title: "نسعد بتواصلكم معنا", lead: "لأي استفسار عن التسجيل، البرامج التعليمية، أو زيارة المدرسة، فريقنا جاهز لمساعدتكم." },
        infoTitle: "معلومات التواصل",
        addressTitle: "العنوان", addressText: "[العنوان الكامل للمدرسة]، لبنان",
        phoneTitle: "الهاتف", phoneText: "+961 XX XXX XXX",
        emailTitle: "البريد الإلكتروني", emailText: "info@essor-school.com",
        hoursTitle: "ساعات الدوام", hoursText: "الإثنين – الجمعة: 7:30 ص – 2:30 م",
        formTitle: "أرسل لنا رسالة",
        formName: "الاسم الكامل", formEmail: "البريد الإلكتروني", formSubject: "الموضوع", formMessage: "رسالتك",
        formNamePh: "اكتب اسمك الكامل", formEmailPh: "example@email.com", formSubjectPh: "بخصوص...", formMessagePh: "اكتب رسالتك هنا...",
        formSubmit: "إرسال الرسالة",
        formNote: "* لتفعيل استقبال الرسائل فعلياً، يجب ربط النموذج بخدمة مثل Formspree كما هو موضح في ملف README.",
        formSuccess: "شكراً لتواصلكم! تم استلام رسالتكم وسنعاود التواصل معكم قريباً.",
        mapTitle: "موقعنا على الخريطة"
      }
    },

    en: {
      meta: { siteName: "Essor School", siteNameEn: "Essor School" },

      nav: {
        home: "Home",
        about: "About",
        events: "Events",
        articles: "Articles",
        contact: "Contact"
      },

      common: {
        langSwitch: "العربية",
        readMore: "Read more",
        viewAll: "View all",
        learnMore: "Learn more",
        backHome: "Back to home",
        toTop: "Back to top"
      },

      footer: {
        about: "Essor School is committed to outstanding education that blends authentic values with modern learning, raising a generation ready to lead the future.",
        quickLinks: "Quick Links",
        contactInfo: "Contact Info",
        followUs: "Follow Us",
        address: "[Full school address], Lebanon",
        phone: "+961 XX XXX XXX",
        email: "info@essor-school.com",
        rights: "© 2026 Essor School. All rights reserved.",
        madeWith: "Built with care for tomorrow's generation"
      },

      home: {
        hero: {
          badge: "Trusted quality education for years",
          title: "A launchpad for <span>excellence</span> and knowledge",
          lead: "At Essor School, we believe education is a journey that shapes the person before the learner. A safe environment, modern curricula, and a capable staff walk alongside your children every step of the way.",
          ctaPrimary: "Discover Essor",
          ctaSecondary: "Get in touch",
          stat1Num: "15+", stat1Label: "Years of experience",
          stat2Num: "500+", stat2Label: "Students",
          stat3Num: "40+", stat3Label: "Teachers & staff",
          stat4Num: "100+", stat4Label: "Free scholarships granted"
        },
        highlights: {
          eyebrow: "Why Essor",
          title: "A well-rounded learning experience",
          subtitle: "We combine authentic values with modern teaching methods to give every student a real chance to grow and excel.",
          item1title: "Quality education", item1text: "A modern, balanced curriculum that builds strong foundations and opens wide horizons for our students.",
          item2title: "Capable educators", item2text: "Qualified teachers and staff who keep pace with the latest teaching methods.",
          item3title: "Safe, supportive environment", item3text: "A space where every student feels they belong and are cared for.",
          item4title: "Activities & life skills", item4text: "Extracurricular, sports, and arts programs that build well-rounded character."
        },
        aboutTeaser: {
          eyebrow: "About our school",
          title: "A story built on a passion for education",
          text: "Since its founding, Essor School has strived to be a second home for its students — blending community values with the latest global learning methods to graduate confident, creative generations.",
          cta: "Learn our history and mission"
        },
        eventsTeaser: {
          eyebrow: "Moments from our school",
          title: "Latest events",
          subtitle: "We come together for national and educational occasions that build our students' sense of belonging.",
          cta: "All events"
        },
        cta: {
          title: "Want to join the Essor family?",
          text: "Get in touch today to learn more about enrollment, our academic programs, and a guided tour of our campus.",
          primary: "Register your interest", secondary: "Contact us"
        }
      },

      about: {
        hero: { eyebrow: "About the school", title: "Our story, mission, and values", lead: "A journey of educational dedication that started with one simple dream: to make a real difference in every student's life." },
        founder: {
          eyebrow: "The Founder",
          name: "General Khaled Daher",
          role: "Founder of the School",
          p1: "General Khaled Daher was born in Jabal Akroum, Akkar — a region whose people have long dreamed of better educational opportunities. After an honorable career as an officer in the army, one dream never left him: to give the children of his homeland the education they truly deserve.",
          p2: "In 1998, he turned that dream into reality by founding Essor School, believing that education is the true path to lifting up the people of Akkar and Jabal Akroum. To this day, his vision remains the cornerstone on which the school's mission is built.",
          quote: "“Education is the most precious gift we can leave our children, and the truest path to a better future.”"
        },
        achievements: {
          eyebrow: "Our community impact",
          title: "Achievements we're proud of",
          subtitle: "Since its beginning, Essor School has been more than classrooms and desks — it's a humanitarian and educational mission that has left a real mark on hundreds of lives.",
          a1title: "Free education for those in need",
          a1text: "We opened a free section welcoming students from families who couldn't afford tuition, believing that education is a right for everyone — not a privilege for a few.",
          a2title: "Welcoming Syrian refugee children",
          a2text: "During the years of war, we opened a dedicated section to teach the children of Syrian refugees, giving them a safe seat and a chance to keep learning despite the hardship.",
          a3title: "Graduates in the finest professions",
          a3text: "Doctors and accomplished professionals have graduated from our classrooms, carrying the name of their first school with pride wherever they go.",
          a4title: "A home for the region's children",
          a4text: "Over the years, the school has remained a trusted educational pillar for hundreds of families across Akkar and Jabal Akroum."
        },
        history: {
          eyebrow: "Our history", title: "Milestones on the Essor journey",
          text: "Over the years, our school has grown from a small idea into an institution trusted by hundreds of families — without ever straying from its core mission: confident, curious, engaged students.",
          item1year: "Founding", item1title: "The dream takes off", item1text: "The school opens its first classrooms, built on a firm belief in the mission of education.",
          item2year: "Expansion", item2title: "Growing our campus", item2text: "New buildings and facilities added to keep pace with a growing student body.",
          item3year: "Curriculum development", item3title: "Strengthening the curriculum", item3text: "Modernizing the curriculum and facilities to meet contemporary standards.",
          item4year: "Today", item4title: "A leading institution", item4text: "Essor School today is an educational home for hundreds of families."
        },
        mission: {
          eyebrow: "Our mission & vision", title: "Values we live by",
          subtitle: "Everything we do at Essor School is guided by a set of core values that shape our daily decisions.",
          v1title: "Academic excellence", v1text: "We pursue the highest standards of educational quality in every subject and class.",
          v2title: "Integrity & respect", v2text: "We instill honesty and mutual respect in our students.",
          v3title: "A sense of belonging", v3text: "A close-knit school community where everyone feels safe and supported.",
          v4title: "Creativity & innovation", v4text: "We encourage curiosity and critical thinking at every stage of learning."
        },
        staff: {
          eyebrow: "Our team", title: "Our teaching & administrative staff",
          subtitle: "A select group of experienced teachers and administrators, committed to caring for every student individually.",
          role1: "Principal", role2: "Academic Supervisor", role3: "Activities Coordinator", role4: "Primary Stage Coordinator",
          placeholderName: "Coming soon",
          note: "* This section will be updated with staff photos and names soon."
        },
        facilities: {
          eyebrow: "Our facilities", title: "A fully-equipped learning environment",
          subtitle: "Spaces designed to support both active learning and extracurricular activities.",
          f1title: "Modern classrooms", f1text: "Well-lit classrooms equipped with interactive teaching tools.",
          f2title: "School library", f2text: "A space rich with books and references to nurture a love of reading and discovery.",
          f3title: "Playground & sports", f3text: "Safe outdoor spaces for play and group sports activities.",
          f4title: "Activity hall", f4text: "A multi-purpose hall for school events and celebrations."
        }
      },

      events: {
        hero: { eyebrow: "Events", title: "Moments we're proud of", lead: "From national celebrations to educational activities, this is where we document our school's best moments." },
        filters: { all: "All", celebrations: "Celebrations", academic: "Academic", sports: "Sports" },
        loadMore: "Load more",
        e1title: "Lebanese Independence Day celebration", e1text: "Our students proudly took part in the Independence Day celebration, wearing national costumes and symbols of belonging and pride.",
        e2title: "Independence Day school party", e2text: "Songs and performances brought to life by our students to celebrate the flag and homeland in a joyful school atmosphere.",
        e3title: "Open Sports Day", e3text: "An annual event bringing students together in team sports competitions. (Coming soon)",
        e4title: "Annual Science Fair", e4text: "Innovative student projects presented to parents and peers. (Coming soon)",
        e5title: "Parent-Teacher Meeting", e5text: "A periodic meeting to discuss our children's academic and personal progress. (Coming soon)",
        comingSoon: "Coming soon",
        videoNote: "Event video highlights will be added here soon."
      },

      articles: {
        hero: { eyebrow: "Articles", title: "School news & articles", lead: "The latest news, announcements, and educational articles from Essor School." },
        filters: { all: "All", news: "News", announcements: "Announcements", studentLife: "Student Life" },
        a1tag: "Announcement", a1title: "Enrollment now open for the new school year", a1excerpt: "Essor School has opened enrollment applications for the upcoming school year, for all grade levels.",
        a2tag: "Student Life", a2title: "Our students celebrate Independence Day", a2excerpt: "A special school event that brought national pride and belonging to life for students of all ages.",
        a3tag: "News", a3title: "Workshop on modern teaching methods", a3excerpt: "Our teaching staff took part in a training workshop to develop interactive teaching techniques.",
        a4tag: "Announcement", a4title: "This term's extracurricular activities schedule", a4excerpt: "Details of the sports and arts activities available to students this term.",
        author: "School Administration", minRead: "min read"
      },

      contact: {
        hero: { eyebrow: "Contact", title: "We'd love to hear from you", lead: "For any inquiry about enrollment, our academic programs, or visiting the school, our team is ready to help." },
        infoTitle: "Contact Information",
        addressTitle: "Address", addressText: "[Full school address], Lebanon",
        phoneTitle: "Phone", phoneText: "+961 XX XXX XXX",
        emailTitle: "Email", emailText: "info@essor-school.com",
        hoursTitle: "Office Hours", hoursText: "Monday – Friday: 7:30 AM – 2:30 PM",
        formTitle: "Send us a message",
        formName: "Full name", formEmail: "Email address", formSubject: "Subject", formMessage: "Your message",
        formNamePh: "Enter your full name", formEmailPh: "example@email.com", formSubjectPh: "Regarding...", formMessagePh: "Write your message here...",
        formSubmit: "Send Message",
        formNote: "* To actually receive submissions, connect this form to a service like Formspree — see the README for setup steps.",
        formSuccess: "Thank you for reaching out! We've received your message and will get back to you soon.",
        mapTitle: "Find us on the map"
      }
    }
  };

  function getPath(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : null;
    }, obj);
  }

  function getLang() {
    var stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}
    return stored === "en" || stored === "ar" ? stored : "ar";
  }

  function setLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }

  function applyTranslations(lang) {
    var dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var value = getPath(dict, el.getAttribute("data-i18n"));
      if (value === null) return;
      el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var value = getPath(dict, el.getAttribute("data-i18n-html"));
      if (value === null) return;
      el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var value = getPath(dict, el.getAttribute("data-i18n-placeholder"));
      if (value === null) return;
      el.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var value = getPath(dict, el.getAttribute("data-i18n-aria"));
      if (value === null) return;
      el.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var value = getPath(dict, el.getAttribute("data-i18n-title"));
      if (value === null) return;
      document.title = value;
    });

    document.querySelectorAll(".lang-toggle [data-i18n]").forEach(function (el) {
      var value = getPath(dict, el.getAttribute("data-i18n"));
      if (value !== null) el.textContent = value;
    });
  }

  function initLangToggle() {
    var toggles = document.querySelectorAll("[data-lang-toggle]");
    toggles.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next = getLang() === "ar" ? "en" : "ar";
        setLang(next);
        applyTranslations(next);
        document.dispatchEvent(new CustomEvent("essor:langchange", { detail: { lang: next } }));
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var lang = getLang();
    setLang(lang);
    applyTranslations(lang);
    initLangToggle();
  });

  // Expose for debugging / other scripts if ever needed.
  window.EssorI18n = { getLang: getLang, setLang: setLang, applyTranslations: applyTranslations };
})();
