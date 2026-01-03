import { createContext, useContext, useEffect, useState } from 'react';

const dictionaries = {
  en: {
    siteName: 'Assain Portfolio',
    tagline: 'Crafting accessible, cinematic web experiences',
    primaryNav: 'Primary Navigation',
    language: 'Language',
    toggleTheme: 'Toggle theme',
    theme: { light: 'Light', dark: 'Dark' },
    nav: { home: 'Home', projects: 'Projects', resume: 'Resume', contact: 'Contact' },
    hero: { title: 'Assain — Front-End Developer', subtitle: 'I am a Frontend Developer with a Bachelor of Science. and hands-on training in modern web technologies. I specialize in building responsive, dynamic web applications using HTML, CSS, JavaScript, and React.js. I prioritize clean code and effective debugging while creating userfriendly interfaces. I am driven to solve real-world problems through scalable frontend solutions ' },
    cta: { viewProjects: 'View Projects', viewResume: 'View Resume' },
    skills: { title: 'SKILLS' },
    projects: {
      title: 'Projects',
      featured: 'PROJECTS',
      stack: 'Stack',
      viewDetails: 'View details',
      liveDemo: 'Live demo',
      back: 'Back to projects',
      notFound: 'Project not found',
      repo: 'PROBLEM ',
      live: 'SOLLUTION',
      highlights: 'Highlights',
    },
    pr_detail:{
        net_tit:"NETFLIX CLONE",
        high_1:["Dynamic category rows with horizontal scrolling",
          "Hero banner with backdrop and CTA",
      "Hover previews and detail modals",
      "Debounced search and genre filters",
      "Keyboard navigation and ARIA labels",
        ],
        sollution:"I developed a Netflix Clone powered by the TMDB API. It features dynamic category rows, a cinematic hero banner, hover previews, and responsive layouts. I added debounced search and genre filters, plus accessibility features like keyboard navigation and ARIA labels.",
        problem:"Static movie sites fail to deliver the dynamic browsing experience users expect from streaming platforms. Discovering content becomes difficult without real‑time updates and smooth UI.",
        net_dis:"A cinematic Netflix Clone using the TMDB API with dynamic rows, hero banner, hover previews and responsive UI.",
        ecommerce:"E_COMMERCE",
        high_2:[
             "Dynamic product catalog with images, descriptions, and pricing",
    "Add-to-cart functionality with order summary and checkout flow",
    "User authentication (login/signup) for personalized shopping",
    "Responsive design optimized for mobile and desktop",
    "Integrated Razorpay payment gateway for secure transactions",
    "Optional admin dashboard to manage products and orders"
        ],
        e_sollution:"I built a responsive E‑Commerce Website using React, Context API, and Bootstrap. It includes product catalog, cart, checkout, and user authentication. To ensure secure transactions, I integrated Razorpay payment gateway, giving customers confidence in completing purchases. Accessibility and responsive design make the platform usable across devices.",
        e_problem:"Small businesses struggle to bring products online with a secure, user‑friendly shopping experience. Customers often face poor navigation, unreliable checkout, and lack of trust in payments.",
        e_summery:"A complete online shopping platform with product catalog, cart, checkout, authentication, and Razorpay payment integration.",

      portfolio:"PORTFOLIO",
      high_3:[
          "Hero section with typing effect and profile photo",
    "Projects grid with hover overlays and detail pages",
    "Skills section with interactive badges and hover animations",
    "Resume grid layout with download option",
    "Contact form with recruiter-friendly info links",
    "Dark/Light theme toggle using CSS variables"
      ],
      p_sollution:"I built a responsive Portfolio Website using React, Context API, and Bootstrap. It includes structured sections for About, Skills, Projects, Resume, and Contact. Accessibility features and responsive design ensure usability across devices, while interactive UI elements make the portfolio engaging.",
      p_problem:"Recruiters and clients often struggle to quickly understand a developer’s skills and projects without a clear, professional portfolio.",
      p_summery:"A responsive personal portfolio website showcasing projects, skills, resume, and contact information with a cinematic UI."
    },
    home:{
        hello:'Hello, I’m Assain',
        ftd_dis:' I am a Frontend Developer with a Bachelor of Science. and hands-on training in modern web technologies. I specialize in building responsive, dynamic web applications using HTML, CSS, JavaScript, and React.js. I prioritize clean code and effective debugging while creating userfriendly interfaces. I am driven to solve real-world problems through scalable frontend solutions',
        ftd:'FRONTEND DEVELOPER',
        d_resume:'Download Resume',
        v_project:'View Projects'
    },
    homecontact:{
         con_me:"Contact Me",
         con_me_dis:"Feel free to reach out for opportunities or collaborations!",
         email:"EMAIL",
         dis:"If you’d like to collaborate or have any questions, feel free to reach out!",
         linkdin:"LinkedIn",
         github:"GitHub",
         name:"NAME",
         messege:"MESSEGE",
         s_messege:"Send Message"
    },
    about:{
        aboutme:"ABOUT ME",
        aboutme_dis:"Hi, I’m Assain — a frontend developer from Chennai. I have completed my Bachelor of Science at The New College and successfully finished an immersive Frontend Developer training program at Besant Technologies, where I specialized in React.js, HTML, CSS, JavaScript, and Bootstrap. This combination of academic learning and professional training has given me both theoretical knowledge and practical, hands‑on experience in building modern web applications. I am passionate about creating responsive, cinematic user interfaces that blend smooth animations, clean layouts, and accessibility‑focused design. My strength lies in localization and adapting user interfaces for diverse audiences, especially Tamil and Arabic, ensuring that every product I build is inclusive and user‑friendly. I enjoy experimenting with original ideas, modular architecture, and scalable solutions that go beyond templates and deliver unique experiences. Over time, I have developed impactful projects that showcase my skills and creativity. One of my major works is an E‑Commerce platform that provides a complete shopping experience with product listings, booking, and checkout flows. Another is a Netflix Clone powered by the TMDB API, which dynamically fetches and displays movie data to simulate a real streaming interface. These projects highlight my ability to combine design, functionality, and originality in a way that delivers value to users. Beyond frontend development, I am resourceful in optimizing tech stacks to reduce costs, integrating backends, and troubleshooting cloud deployments. My short‑term goal is to secure a frontend developer role where I can apply my strengths in accessibility, responsive design, and global user experience. In the long run, I aspire to grow into a versatile engineer who blends creativity with technical depth, contributing to projects that solve real problems and make technology more inclusive for everyone."
    },
    resume: {
      title: 'ASSAIN M',
      intro: 'Frontend Developer',
      education: 'Education',
      eduDetail: 'Bachelor of Science',
      eduDetail_date: '08/2022 - 05/2025 ',
      schoolDetail: 'S.K.P.D Boys Hr Sec School',
      school_date: '08/2020 - 05/2022 ',
      certification: 'CERTIFICATION',
      college: 'The New College, Chennai',
      school: 'High School Chennai',
      skills: 'SKILLS',
      lang: 'LANGUAGES',
      ta: 'Tamil',
      eng: 'English',
      hind: 'Hindi',
      urdu: 'Urdu',
      k_skills: 'KEY SKILLS',
      c_code: 'Clean Code',
      Collaboration: 'Collaboration',
      Adaptability: 'Adaptability',
      p_solve: 'Problem Solving',
      c_skills: 'Communication Skills',
      error: 'Error Handling ',
      download: 'Download',
      downloadCta: 'Download PDF',
      projects: 'PROJECTS',
      e_commerce: 'E-Commerce Product Pages',
      e_commerce_dis1: 'Cart logic with subtotal calculation, quantity updates, and responsive design',
      e_commerce_dis2: 'Built reusable components for product display and checkout flow',
      summary: 'SUMMARY',
      tools: 'TOOLS',
      vs_code: 'Visual Studio Code.',
      git: 'Git/GitHub',
      strengths: 'STRENGTHS',
      ft_strengths: 'Frontend Strengths',
      link: 'LINK',
      rp_design: 'Responsive Design',
      mobile_first: 'Mobile-first layouts, flex/grid systems, adaptive styling',
      debug_opt: 'Debugging & Optimization',
      console_track: 'Console tracing, prop drilling fixes, performance tuning',
      component_arc: 'Component architecture, API integration, routing, props handling, Hooks handling',
      netflix: 'Netflix Clone',
      netflix_dis1: 'Genre-based movie rows, modal previews, responsive layout',
      netflix_dis2: 'Dynamic data fetching and reusable components',
      netflix_dis3: 'React.js TMDB API',
      frontend_dev: 'Frontend Developer – Besant Technologies, Chennai',
      frontend_dev_dis: 'Completed immersive training in HTML, CSS, JavaScript, React.js, Bootstrap, and responsive design',
      summary_dis: 'I am a Frontend Developer with a Bachelor of Science. and hands-on training in modern web technologies. I specialize in building responsive, dynamic web applications using HTML, CSS, JavaScript, and React.js. I prioritize clean code and effective debugging while creating userfriendly interfaces. I am driven to solve real-world problems through scalable frontend solutions '
    },
  
    footer: { rights: 'All rights reserved.' },
  },
  ta: {
  "siteName": "அசைன் போர்ட்ஃபோலியோ",
  "tagline": "அணுகக்கூடிய, சினிமா போன்ற வலை அனுபவங்களை உருவாக்குதல்",
  "primaryNav": "முதன்மை வழிசெலுத்தல்",
  "language": "மொழி",
  "toggleTheme": "தீம் மாற்று",
  "theme": { "light": "ஒளி", "dark": "இருள்" },
  "nav": { "home": "முகப்பு", "projects": "திட்டங்கள்", "resume": "சுயவிவரம்", "contact": "தொடர்பு" },
  "hero": {
    "title": "அசைன் — முன்-இறுதி டெவலப்பர்",
    "subtitle": "நான் ஒரு முன்-இறுதி டெவலப்பர். அறிவியல் பட்டம் பெற்றுள்ளேன். React.js, HTML, CSS, JavaScript, Bootstrap போன்ற நவீன வலை தொழில்நுட்பங்களில் பயிற்சி பெற்றுள்ளேன். பதிலளிக்கும், இயக்கமான வலை பயன்பாடுகளை உருவாக்குவதில் நிபுணத்துவம் பெற்றுள்ளேன். சுத்தமான குறியீடு, பயனர் நட்பு இடைமுகங்கள், பிழைதிருத்தம் ஆகியவற்றில் கவனம் செலுத்துகிறேன்."
  },
  "cta": { "viewProjects": "திட்டங்களைப் பார்க்க", "viewResume": "சுயவிவரத்தைப் பார்க்க" },
  "skills": { "title": "திறன்கள்" },
  "projects": {
    "title": "திட்டங்கள்",
    "featured": "சிறப்பு திட்டங்கள்",
    "stack": "தொழில்நுட்பங்கள்",
    "viewDetails": "விவரங்களைப் பார்க்க",
    "liveDemo": "நேரடி டெமோ",
    "back": "திட்டங்களுக்கு திரும்பு",
    "notFound": "திட்டம் கிடைக்கவில்லை",
    "repo": "பிரச்சனை",
    "live": "தீர்வு",
    "highlights": "முக்கிய அம்சங்கள்"
  },
  "pr_detail": {
    "net_tit": "நெட்ஃப்ளிக்ஸ் கிளோன்",
    "high_1": [
      "இயங்கும் வகை வரிசைகள்",
      "பின்னணி மற்றும் CTA உடன் ஹீரோ பேனர்",
      "ஹோவர் முன்னோட்டங்கள் மற்றும் விவர மோடல்கள்",
      "தேடல் மற்றும் வகை வடிகட்டிகள்",
      "விசைப்பலகை வழிசெலுத்தல் மற்றும் ARIA லேபிள்கள்"
    ],
    "sollution": "TMDB API கொண்டு Netflix Clone உருவாக்கினேன்...",
    "problem": "நிலையான திரைப்பட தளங்கள் இயக்கமான உலாவல் அனுபவத்தை வழங்க முடியாது...",
    "net_dis": "TMDB API கொண்டு உருவாக்கப்பட்ட Netflix Clone...",
    "ecommerce": "இ-காமர்ஸ்",
    "high_2": [
      "பொருள் பட்டியல்",
      "கார்ட் மற்றும் ஆர்டர் சுருக்கம்",
      "பயனர் அங்கீகாரம்",
      "பதிலளிக்கும் வடிவமைப்பு",
      "ரேசர்பே கட்டண இணைப்பு",
      "நிர்வாக டாஷ்போர்டு"
    ],
    "e_sollution": "React, Context API, Bootstrap கொண்டு E-Commerce தளம் உருவாக்கினேன்...",
    "e_problem": "சிறு வியாபாரிகள் ஆன்லைனில் பொருட்களை விற்க சிரமப்படுகிறார்கள்...",
    "e_summery": "முழுமையான ஆன்லைன் ஷாப்பிங் தளம்.",
    "portfolio": "போர்ட்ஃபோலியோ",
    "high_3": [
      "ஹீரோ பிரிவு",
      "திட்டங்கள் கிரிட்",
      "திறன்கள் பிரிவு",
      "சுயவிவரம் பதிவிறக்கம்",
      "தொடர்பு படிவம்",
      "இருள்/ஒளி தீம் மாற்று"
    ],
    "p_sollution": "React, Context API, Bootstrap கொண்டு போர்ட்ஃபோலியோ தளம் உருவாக்கினேன்...",
    "p_problem": "Recruiters developer skills‑ஐ புரிந்து கொள்ள சிரமப்படுகிறார்கள்...",
    "p_summery": "திறன்கள், திட்டங்கள், சுயவிவரம், தொடர்பு ஆகியவற்றை காட்டும் போர்ட்ஃபோலியோ தளம்."
  },
  "home": {
    "hello": "வணக்கம், நான் அசைன்",
    "ftd_dis": "நான் ஒரு முன்-இறுதி டெவலப்பர். React.js, HTML, CSS, JavaScript, Bootstrap ஆகியவற்றில் நிபுணத்துவம் பெற்றுள்ளேன்.",
    "ftd": "முன்-இறுதி டெவலப்பர்",
    "d_resume": "சுயவிவரம் பதிவிறக்கம்",
    "v_project": "திட்டங்களைப் பார்க்க"
  },
  "homecontact": {
    "con_me": "என்னை தொடர்பு கொள்ளுங்கள்",
    "con_me_dis": "வாய்ப்புகள் அல்லது ஒத்துழைப்புகளுக்காக தொடர்பு கொள்ளுங்கள்!",
    "email": "மின்னஞ்சல்",
    "dis": "உங்களுக்கு கேள்விகள் இருந்தால் தொடர்பு கொள்ளுங்கள்!",
    "linkdin": "லிங்க்ட்இன்",
    "github": "கிட்ஹப்",
    "name": "பெயர்",
    "messege": "செய்தி",
    "s_messege": "செய்தி அனுப்பு"
  },
  "about": {
    "aboutme": "என்னைப் பற்றி",
    "aboutme_dis": "நான் அசைன் — சென்னை நகரத்தை சேர்ந்த முன்-இறுதி டெவலப்பர்..."
  },
  "resume": {
    "title": "அசைன் M",
    "intro": "முன்-இறுதி டெவலப்பர்",
    "education": "கல்வி",
    "eduDetail": "அறிவியல் பட்டம்",
    "eduDetail_date": "08/2022 - 05/2025",
    "schoolDetail": "S.K.P.D பாய்ஸ் உயர்நிலை பள்ளி",
    "school_date": "08/2020 - 05/2022",
    "certification": "சான்றிதழ்",
    "college": "தி நியூ கல்லூரி, சென்னை",
    "school": "உயர்நிலை பள்ளி, சென்னை",
    "skills": "திறன்கள்",
    "lang": "மொழிகள்",
    "ta": "தமிழ்",
    "eng": "ஆங்கிலம்",
    "hind": "இந்தி",
    "urdu": "உருது",
  "netflix_dis1": "வகை அடிப்படையிலான திரைப்பட வரிசைகள், மோடல் முன்னோட்டங்கள், பதிலளிக்கும் வடிவமைப்பு",
  "netflix_dis2": "இயங்கும் தரவு பெறுதல் மற்றும் மீண்டும் பயன்படுத்தக்கூடிய கூறுகள்",
  "netflix_dis3": "React.js TMDB API",
  "e_commerce_dis1": "கார்ட் லாஜிக் உடன் இடைத் தொகை கணக்கீடு, அளவு புதுப்பிப்புகள், மற்றும் பதிலளிக்கும் வடிவமைப்பு",
  "e_commerce_dis2": "பொருள் காட்சி மற்றும் சேக்அவுட் ஓட்டத்திற்கான மீண்டும் பயன்படுத்தக்கூடிய கூறுகளை உருவாக்கினேன்",
    "k_skills": "முக்கிய திறன்கள்",
    "c_code": "சுத்தமான குறியீடு",
    "Collaboration": "ஒத்துழைப்பு",
    "Adaptability": "ஏற்றுக்கொள்ளும் திறன்",
    "p_solve": "பிரச்சனை தீர்வு",
    "c_skills": "தொடர்பு திறன்கள்",
    "error": "பிழை கையாளல்",
    "download": "பதிவிறக்கம்",
    "downloadCta": "PDF பதிவிறக்கம்",
    "projects": "திட்டங்கள்",
    "e_commerce": "இ-காமர்ஸ் பொருள் பக்கங்கள்",
    "summary": "சுருக்கம்",
    "tools": "கருவிகள்",
    "vs_code": "விசுவல் ஸ்டுடியோ கோட்",
    "git": "கிட்/கிட்ஹப்",
    "strengths": "வலிமைகள்",
    "ft_strengths": "முன்-இறுதி வலிமைகள்",
    "link": "இணைப்பு",
    "rp_design": "பதிலளிக்கும் வடிவமைப்பு",
    "mobile_first": "மொபைல்-முதன்மை வடிவமைப்பு",
    "debug_opt": "பிழைதிருத்தம் & மேம்பாடு",
    "console_track": "கான்சோல் டிரேசிங், செயல்திறன் மேம்பாடு",
    "component_arc": "காம்போனென்ட் கட்டமைப்பு, API இணைப்பு, ரவுடிங்",
    "netflix": "நெட்ஃப்ளிக்ஸ் கிளோன்",
    "frontend_dev": "முன்-இறுதி டெவலப்பர் – Besant Technologies, சென்னை",
    "frontend_dev_dis": "HTML, CSS, JavaScript, React.js, Bootstrap ஆகியவற்றில் பயிற்சி பெற்றேன்",
    "summary_dis": "நான் ஒரு முன்-இறுதி டெவலப்பர். React.js, HTML, CSS, JavaScript, Bootstrap ஆகியவற்றில் நிபுணத்துவம் பெற்றுள்ளேன்."
  },
    footer: { rights: 'அனைத்து உரிமைகள் பாதுகாக்கப்பட்டவை.' },
  },
  ar: {
  "siteName": "بورتفوليو أسّين",
  "tagline": "ابتكار تجارب ويب سينمائية يسهل الوصول إليها",
  "primaryNav": "التنقل الرئيسي",
  "language": "اللغة",
  "toggleTheme": "تبديل النمط",
  "theme": { "light": "فاتح", "dark": "داكن" },
  "nav": { "home": "الرئيسية", "projects": "المشاريع", "resume": "السيرة الذاتية", "contact": "اتصل" },
  "hero": {
    "title": "أسّين — مطوّر واجهات أمامية",
    "subtitle": "أنا مطوّر واجهات أمامية حاصل على بكالوريوس علوم، وتدريب عملي على أحدث تقنيات الويب. أتخصص في بناء تطبيقات ويب ديناميكية ومتجاوبة باستخدام HTML وCSS وJavaScript وReact.js. أركز على كتابة كود نظيف وتصحيح الأخطاء بفعالية مع إنشاء واجهات سهلة الاستخدام. مدفوع بحل المشكلات الواقعية من خلال حلول أمامية قابلة للتوسع."
  },
  "cta": { "viewProjects": "عرض المشاريع", "viewResume": "عرض السيرة الذاتية" },
  "skills": { "title": "المهارات" },
  "projects": {
    "title": "المشاريع",
    "featured": "المشاريع المميزة",
    "stack": "التقنيات",
    "viewDetails": "عرض التفاصيل",
    "liveDemo": "عرض مباشر",
    "back": "العودة إلى المشاريع",
    "notFound": "المشروع غير موجود",
    "repo": "المشكلة",
    "live": "الحل",
    "highlights": "أبرز المزايا"
  },
  "pr_detail": {
    "net_tit": "نسخة نيتفليكس",
    "high_1": [
      "صفوف فئات ديناميكية مع تمرير أفقي",
      "لافتة رئيسية مع خلفية وزر CTA",
      "معاينات عند التمرير ونوافذ تفاصيل",
      "بحث مؤجل ومرشحات حسب النوع",
      "تنقل عبر لوحة المفاتيح وعلامات ARIA"
    ],
    "sollution": "طورت نسخة من نيتفليكس باستخدام TMDB API مع صفوف ديناميكية ولافتة سينمائية...",
    "problem": "المواقع الثابتة تفشل في تقديم تجربة تصفح ديناميكية كما يتوقع المستخدمون...",
    "net_dis": "نسخة نيتفليكس سينمائية باستخدام TMDB API...",
    "ecommerce": "التجارة الإلكترونية",
    "high_2": [
      "كتالوج منتجات ديناميكي مع صور وأسعار",
      "وظيفة إضافة إلى السلة مع ملخص الطلب",
      "تسجيل دخول/اشتراك للمستخدمين",
      "تصميم متجاوب للهواتف وأجهزة الكمبيوتر",
      "دمج بوابة دفع Razorpay",
      "لوحة تحكم إدارية لإدارة المنتجات والطلبات"
    ],
    "e_sollution": "بنيت موقع تجارة إلكترونية باستخدام React وContext API وBootstrap...",
    "e_problem": "تواجه الشركات الصغيرة صعوبة في بيع منتجاتها عبر الإنترنت...",
    "e_summery": "منصة تسوق إلكترونية متكاملة.",
    "portfolio": "بورتفوليو",
    "high_3": [
      "قسم رئيسي مع تأثير كتابة وصورة شخصية",
      "شبكة مشاريع مع تراكبات عند التمرير",
      "قسم مهارات مع شارات تفاعلية",
      "شبكة سيرة ذاتية مع خيار تحميل",
      "نموذج اتصال مع روابط مفيدة",
      "تبديل النمط بين فاتح/داكن"
    ],
    "p_sollution": "أنشأت موقع بورتفوليو متجاوب باستخدام React وContext API وBootstrap...",
    "p_problem": "غالبًا ما يجد المجندون والعملاء صعوبة في فهم مهارات المطوّر بسرعة...",
    "p_summery": "موقع بورتفوليو شخصي يعرض المشاريع والمهارات والسيرة الذاتية ومعلومات الاتصال."
  },
  "home": {
    "hello": "مرحبًا، أنا أسّين",
    "ftd_dis": "أنا مطوّر واجهات أمامية حاصل على بكالوريوس علوم وتدريب عملي...",
    "ftd": "مطوّر واجهات أمامية",
    "d_resume": "تحميل السيرة الذاتية",
    "v_project": "عرض المشاريع"
  },
  "homecontact": {
    "con_me": "اتصل بي",
    "con_me_dis": "لا تتردد في التواصل لفرص أو تعاون!",
    "email": "البريد الإلكتروني",
    "dis": "إذا كنت ترغب في التعاون أو لديك أي أسئلة، تواصل معي!",
    "linkdin": "لينكدإن",
    "github": "جيت هب",
    "name": "الاسم",
    "messege": "الرسالة",
    "s_messege": "إرسال الرسالة"
  },
  "about": {
    "aboutme": "عني",
    "aboutme_dis": "أنا أسّين — مطوّر واجهات أمامية من تشيناي. أكملت بكالوريوس علوم وتدريب مكثف في Besant Technologies حيث تخصصت في React.js وHTML وCSS وJavaScript وBootstrap. شغوف بإنشاء واجهات مستخدم متجاوبة وسينمائية مع تصميم يركز على الوصول والتوطين."
  },
  "resume": {
    "title": "أسّين م",
    "intro": "مطوّر واجهات أمامية",
    "education": "التعليم",
    "eduDetail": "بكالوريوس علوم",
    "eduDetail_date": "08/2022 - 05/2025",
    "schoolDetail": "مدرسة S.K.P.D الثانوية",
    "school_date": "08/2020 - 05/2022",
    "certification": "شهادة",
    "college": "الكلية الجديدة، تشيناي",
    "school": "مدرسة ثانوية تشيناي",
    "skills": "المهارات",
    "lang": "اللغات",
    "ta": "التاميل",
    "eng": "الإنجليزية",
    "hind": "الهندية",
    "urdu": "الأردية",
    "k_skills": "المهارات الأساسية",
    "c_code": "كود نظيف",
    "Collaboration": "التعاون",
    "Adaptability": "القدرة على التكيف",
    "netflix_dis1": "صفوف أفلام حسب النوع، معاينات منبثقة، وتصميم متجاوب",
  "netflix_dis2": "جلب بيانات ديناميكي ومكونات قابلة لإعادة الاستخدام",
  "netflix_dis3": "React.js TMDB API",
  "e_commerce_dis1": "منطق السلة مع حساب المجموع الفرعي، تحديث الكمية، وتصميم متجاوب",
  "e_commerce_dis2": "بنيت مكونات قابلة لإعادة الاستخدام لعرض المنتجات وتدفق الدفع",
    "p_solve": "حل المشكلات",
    "c_skills": "مهارات التواصل",
    "error": "معالجة الأخطاء",
    "download": "تحميل",
    "downloadCta": "تحميل PDF",
    "projects": "المشاريع",
    "e_commerce": "صفحات منتجات التجارة الإلكترونية",
    "summary": "ملخص",
    "tools": "الأدوات",
    "vs_code": "فيجوال ستوديو كود",
    "git": "جيت/جيت هب",
    "strengths": "نقاط القوة",
    "ft_strengths": "قوة الواجهات الأمامية",
    "link": "رابط",
    "rp_design": "تصميم متجاوب",
    "mobile_first": "تصميم يبدأ من الهاتف",
    "debug_opt": "تصحيح وتحسين",
    "console_track": "تتبع الكونسول وتحسين الأداء",
    "component_arc": "بنية المكونات، تكامل API، التوجيه",
    "netflix": "نسخة نيتفليكس",
    "frontend_dev": "مطوّر واجهات أمامية – Besant Technologies، تشيناي",
    "frontend_dev_dis": "أكملت تدريبًا مكثفًا في HTML وCSS وJavaScript وReact.js وBootstrap",
    "summary_dis": "أنا مطوّر واجهات أمامية حاصل على بكالوريوس علوم وتدريب عملي..."
  },
    footer: { rights: 'جميع الحقوق محفوظة.' },
  },
};

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const t = (key) => {
    const parts = key.split('.');
    let node = dictionaries[lang];
    for (const p of parts) node = node?.[p];
    return node ?? key;
  };

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'ar', label: 'العربية' },
  ];

  return (
    <I18nContext.Provider value={{ t, lang, setLang, languages }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}