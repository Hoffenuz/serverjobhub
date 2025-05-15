import type {
  User,
  Resume,
  Job,
  Project,
  Company,
  Application,
  Proposal,
  Message,
  Conversation,
  Notification,
} from "./models"

// Mock users
export const users: User[] = [
  {
    id: "1",
    name: "Aziz Karimov",
    email: "aziz@example.com",
    phone: "+998 90 123 45 67",
    avatar: "/placeholder.svg?height=100&width=100",
    userType: "jobseeker",
    location: {
      country: "O'zbekiston",
      region: "Toshkent",
      city: "Toshkent",
    },
    createdAt: new Date("2023-01-15"),
    lastActive: new Date(),
    skills: [
      { name: "JavaScript", level: "advanced", yearsOfExperience: 3 },
      { name: "React", level: "intermediate", yearsOfExperience: 2 },
      { name: "Node.js", level: "intermediate", yearsOfExperience: 2 },
    ],
    languages: [
      { name: "O'zbek", level: "native" },
      { name: "Rus", level: "fluent" },
      { name: "Ingliz", level: "intermediate" },
    ],
    verificationStatus: "email_verified",
    rating: 4.8,
    savedJobs: ["1", "3"],
    subscription: "free",
  },
  {
    id: "2",
    name: "Malika Rahimova",
    email: "malika@example.com",
    phone: "+998 91 234 56 78",
    avatar: "/placeholder.svg?height=100&width=100",
    userType: "employer",
    location: {
      country: "O'zbekiston",
      region: "Toshkent",
      city: "Toshkent",
    },
    createdAt: new Date("2022-11-20"),
    lastActive: new Date(),
    verificationStatus: "fully_verified",
    rating: 4.9,
    subscription: "premium",
    subscriptionExpiresAt: new Date("2024-11-20"),
  },
  {
    id: "3",
    name: "Bobur Aliyev",
    email: "bobur@example.com",
    phone: "+998 93 345 67 89",
    avatar: "/placeholder.svg?height=100&width=100",
    userType: "freelancer",
    location: {
      country: "O'zbekiston",
      region: "Samarqand",
      city: "Samarqand",
    },
    createdAt: new Date("2023-03-10"),
    lastActive: new Date(),
    skills: [
      { name: "UI/UX Design", level: "expert", yearsOfExperience: 5 },
      { name: "Figma", level: "expert", yearsOfExperience: 4 },
      { name: "Adobe Photoshop", level: "advanced", yearsOfExperience: 6 },
    ],
    languages: [
      { name: "O'zbek", level: "native" },
      { name: "Ingliz", level: "fluent" },
    ],
    verificationStatus: "email_verified",
    rating: 4.7,
    subscription: "basic",
    subscriptionExpiresAt: new Date("2024-06-10"),
  },
]

// Mock resumes
export const resumes: Resume[] = [
  {
    id: "1",
    userId: "1",
    title: "Frontend Developer",
    summary:
      "3 yillik tajribaga ega Frontend Developer. React, JavaScript va TypeScript texnologiyalarida ishlay olaman. Responsive va zamonaviy web ilovalarni yaratishda tajribam bor.",
    experience: [
      {
        company: "Tech Solutions",
        position: "Frontend Developer",
        startDate: new Date("2021-06-01"),
        endDate: undefined,
        current: true,
        description:
          "React va TypeScript yordamida web ilovalar yaratish. REST API bilan ishlash, state management (Redux, Context API).",
        location: "Toshkent, O'zbekiston",
      },
      {
        company: "Digital Agency",
        position: "Junior Developer",
        startDate: new Date("2020-01-15"),
        endDate: new Date("2021-05-30"),
        current: false,
        description: "HTML, CSS va JavaScript yordamida web sahifalar yaratish. Bootstrap va jQuery bilan ishlash.",
        location: "Toshkent, O'zbekiston",
      },
    ],
    education: [
      {
        institution: "Toshkent Axborot Texnologiyalari Universiteti",
        degree: "Bakalavr",
        fieldOfStudy: "Kompyuter muhandisligi",
        startDate: new Date("2016-09-01"),
        endDate: new Date("2020-06-30"),
        current: false,
        description: "Dasturlash, ma'lumotlar bazasi va web texnologiyalari bo'yicha ta'lim oldim.",
      },
    ],
    skills: [
      { name: "JavaScript", level: "advanced", yearsOfExperience: 3 },
      { name: "React", level: "intermediate", yearsOfExperience: 2 },
      { name: "TypeScript", level: "intermediate", yearsOfExperience: 2 },
      { name: "HTML/CSS", level: "advanced", yearsOfExperience: 4 },
      { name: "Redux", level: "intermediate", yearsOfExperience: 2 },
    ],
    languages: [
      { name: "O'zbek", level: "native" },
      { name: "Rus", level: "fluent" },
      { name: "Ingliz", level: "intermediate" },
    ],
    certificates: [
      {
        name: "React - The Complete Guide",
        issuer: "Udemy",
        issueDate: new Date("2021-03-15"),
        credentialId: "UC-12345678",
        credentialUrl: "https://udemy.com/certificate/UC-12345678",
      },
    ],
    projects: [
      {
        id: "p1",
        clientId: "",
        title: "E-commerce web sayt",
        description: "React va Node.js yordamida yaratilgan to'liq funksional e-commerce platforma.",
        category: ["Web Development"],
        skills: [{ name: "React" }, { name: "Node.js" }, { name: "MongoDB" }],
        status: "completed",
        visibility: "public",
        createdAt: new Date("2022-05-10"),
        updatedAt: new Date("2022-07-20"),
        proposals: 0,
        featured: false,
      },
    ],
    desiredSalary: {
      amount: 1000,
      currency: "USD",
      period: "month",
    },
    desiredJobType: ["full-time", "remote"],
    desiredLocation: ["Toshkent", "Remote"],
    visibility: "public",
    createdAt: new Date("2023-01-20"),
    updatedAt: new Date("2023-05-15"),
    views: 45,
    downloads: 12,
    status: "active",
  },
]

// Mock jobs
export const jobs: Job[] = [
  {
    id: "1",
    employerId: "2",
    companyId: "1",
    title: "Senior Frontend Developer",
    description:
      "Tech Solutions kompaniyasi tajribali Frontend Developer izlayapti. Nomzod React, TypeScript va zamonaviy frontend texnologiyalarini yaxshi bilishi kerak.",
    requirements:
      "- 3+ yillik React tajribasi\n- TypeScript bilan ishlash tajribasi\n- State management (Redux, MobX, Context API)\n- REST API bilan ishlash tajribasi\n- Responsive design\n- Git versiya boshqaruvi",
    responsibilities:
      "- Yangi funksiyalarni ishlab chiqish va mavjud funksiyalarni takomillashtirish\n- Komanda bilan hamkorlikda ishlash\n- Kod sifatini nazorat qilish\n- Texnik hujjatlarni tayyorlash",
    benefits:
      "- Raqobatbardosh maosh\n- Tibbiy sug'urta\n- Masofaviy ishlash imkoniyati\n- Professional rivojlanish imkoniyatlari\n- Zamonaviy ofis",
    category: ["Web Development", "Frontend", "Software Development"],
    jobType: ["full-time", "remote"],
    location: {
      country: "O'zbekiston",
      region: "Toshkent",
      city: "Toshkent",
      remote: true,
    },
    salary: {
      min: 1200,
      max: 1800,
      currency: "USD",
      period: "month",
      negotiable: true,
    },
    experience: {
      min: 3,
      max: 7,
    },
    education: "bachelor",
    skills: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Redux" },
      { name: "HTML/CSS" },
      { name: "JavaScript" },
    ],
    languages: [
      { name: "O'zbek", level: "conversational" },
      { name: "Ingliz", level: "fluent" },
    ],
    applicationDeadline: new Date("2023-12-30"),
    createdAt: new Date("2023-11-15"),
    updatedAt: new Date("2023-11-15"),
    status: "active",
    views: 120,
    applications: 15,
    urgentHiring: true,
    verificationStatus: "verified",
  },
  {
    id: "2",
    employerId: "2",
    companyId: "1",
    title: "Backend Developer (Node.js)",
    description:
      "Tech Solutions kompaniyasi tajribali Backend Developer izlayapti. Nomzod Node.js, Express va ma'lumotlar bazalari bilan ishlash tajribasiga ega bo'lishi kerak.",
    requirements:
      "- 2+ yillik Node.js tajribasi\n- Express.js framework\n- MongoDB, PostgreSQL kabi ma'lumotlar bazalari\n- RESTful API yaratish\n- Authentication va authorization\n- Git versiya boshqaruvi",
    responsibilities:
      "- Backend API yaratish va qo'llab-quvvatlash\n- Ma'lumotlar bazasi arxitekturasini loyihalash\n- Xavfsizlik va optimizatsiya\n- Texnik hujjatlarni tayyorlash",
    benefits:
      "- Raqobatbardosh maosh\n- Tibbiy sug'urta\n- Masofaviy ishlash imkoniyati\n- Professional rivojlanish imkoniyatlari\n- Zamonaviy ofis",
    category: ["Web Development", "Backend", "Software Development"],
    jobType: ["full-time"],
    location: {
      country: "O'zbekiston",
      region: "Toshkent",
      city: "Toshkent",
      remote: false,
    },
    salary: {
      min: 1000,
      max: 1500,
      currency: "USD",
      period: "month",
      negotiable: true,
    },
    experience: {
      min: 2,
      max: 5,
    },
    education: "bachelor",
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "RESTful API" },
    ],
    languages: [
      { name: "O'zbek", level: "conversational" },
      { name: "Ingliz", level: "fluent" },
    ],
    applicationDeadline: new Date("2023-12-25"),
    createdAt: new Date("2023-11-10"),
    updatedAt: new Date("2023-11-10"),
    status: "active",
    views: 95,
    applications: 8,
    urgentHiring: false,
    verificationStatus: "verified",
  },
  {
    id: "3",
    employerId: "2",
    companyId: "2",
    title: "UI/UX Designer",
    description:
      "Creative Studio kompaniyasi tajribali UI/UX Designer izlayapti. Nomzod zamonaviy dizayn tendensiyalarini bilishi va foydalanuvchi tajribasini yaxshilash bo'yicha tajribaga ega bo'lishi kerak.",
    requirements:
      "- 2+ yillik UI/UX dizayn tajribasi\n- Figma, Adobe XD kabi dizayn dasturlari\n- Foydalanuvchi tajribasini tahlil qilish\n- Responsive va mobile-first dizayn\n- Prototip yaratish",
    responsibilities:
      "- Foydalanuvchi interfeyslarini loyihalash\n- Prototiplar va wireframe'lar yaratish\n- Dizayn tizimlarini ishlab chiqish\n- Foydalanuvchi tajribasini yaxshilash\n- Frontend dasturchilar bilan hamkorlik qilish",
    benefits:
      "- Raqobatbardosh maosh\n- Tibbiy sug'urta\n- Masofaviy ishlash imkoniyati\n- Professional rivojlanish imkoniyatlari\n- Ijodiy muhit",
    category: ["Design", "UI/UX", "Creative"],
    jobType: ["full-time", "remote"],
    location: {
      country: "O'zbekiston",
      region: "Toshkent",
      city: "Toshkent",
      remote: true,
    },
    salary: {
      min: 800,
      max: 1200,
      currency: "USD",
      period: "month",
      negotiable: true,
    },
    experience: {
      min: 2,
      max: 4,
    },
    education: "bachelor",
    skills: [
      { name: "UI Design" },
      { name: "UX Design" },
      { name: "Figma" },
      { name: "Adobe XD" },
      { name: "Prototyping" },
    ],
    languages: [
      { name: "O'zbek", level: "fluent" },
      { name: "Ingliz", level: "conversational" },
    ],
    applicationDeadline: new Date("2023-12-20"),
    createdAt: new Date("2023-11-05"),
    updatedAt: new Date("2023-11-05"),
    status: "active",
    views: 78,
    applications: 6,
    urgentHiring: false,
    verificationStatus: "verified",
  },
]

// Mock projects (freelance)
export const projects: Project[] = [
  {
    id: "1",
    clientId: "2",
    title: "Web sayt yaratish - IT kompaniya uchun",
    description:
      "IT kompaniya uchun zamonaviy va responsive web sayt yaratish kerak. Sayt kompaniya xizmatlari, portfolio va blog sahifalarini o'z ichiga olishi kerak.",
    category: ["Web Development", "Frontend"],
    budget: {
      min: 500,
      max: 1000,
      currency: "USD",
      type: "fixed",
    },
    deadline: new Date("2023-12-30"),
    skills: [{ name: "React" }, { name: "Node.js" }, { name: "MongoDB" }],
    status: "open",
    visibility: "public",
    createdAt: new Date("2023-11-15"),
    updatedAt: new Date("2023-11-15"),
    proposals: 12,
    featured: true,
  },
  {
    id: "2",
    clientId: "2",
    title: "Mobil ilova dizayni - Fitnes ilova",
    description:
      "Fitnes ilova uchun zamonaviy va foydalanuvchilarga qulay interfeys dizayni kerak. Ilova mashqlar, ovqatlanish rejasi va progress kuzatish funksiyalarini o'z ichiga oladi.",
    category: ["UI/UX Design", "Mobile Design"],
    budget: {
      min: 300,
      max: 600,
      currency: "USD",
      type: "fixed",
    },
    deadline: new Date("2023-12-15"),
    skills: [{ name: "Figma" }, { name: "UI/UX" }, { name: "Mobile Design" }],
    status: "open",
    visibility: "public",
    createdAt: new Date("2023-11-10"),
    updatedAt: new Date("2023-11-10"),
    proposals: 8,
    featured: false,
  },
]

// Mock companies
export const companies: Company[] = [
  {
    id: "1",
    name: "Tech Solutions",
    description:
      "Tech Solutions - bu zamonaviy texnologiyalar sohasida yetakchi kompaniya. Biz mijozlarimizga yuqori sifatli dasturiy ta'minot yechimlari, veb-saytlar va mobil ilovalarni taqdim etamiz. Bizning jamoamiz tajribali mutaxassislardan iborat bo'lib, har qanday murakkablikdagi loyihalarni amalga oshirish imkoniyatiga ega.",
    logo: "/placeholder.svg?height=100&width=100",
    website: "https://techsolutions.uz",
    industry: ["Information Technology", "Software Development", "Web Development"],
    size: "51-200",
    founded: 2015,
    location: {
      country: "O'zbekiston",
      region: "Toshkent",
      city: "Toshkent",
      address: "Amir Temur ko'chasi, 108-uy",
    },
    socialMedia: {
      linkedin: "https://linkedin.com/company/techsolutions",
      facebook: "https://facebook.com/techsolutions",
      instagram: "https://instagram.com/techsolutions",
    },
    verificationStatus: "verified",
    employees: [],
    jobs: [],
    createdAt: new Date("2015-05-10"),
    updatedAt: new Date("2023-10-15"),
    views: 1250,
    rating: 4.7,
  },
  {
    id: "2",
    name: "Creative Studio",
    description:
      "Creative Studio - bu dizayn va ijodiy yechimlar sohasida faoliyat yurituvchi kompaniya. Biz brending, UI/UX dizayn, grafik dizayn va video ishlab chiqarish xizmatlarini taqdim etamiz. Bizning maqsadimiz - mijozlarimizga eng yuqori sifatli va innovatsion ijodiy yechimlarni taqdim etish.",
    logo: "/placeholder.svg?height=100&width=100",
    website: "https://creativestudio.uz",
    industry: ["Design", "Creative", "Branding"],
    size: "11-50",
    founded: 2018,
    location: {
      country: "O'zbekiston",
      region: "Toshkent",
      city: "Toshkent",
      address: "Shota Rustaveli ko'chasi, 56-uy",
    },
    socialMedia: {
      linkedin: "https://linkedin.com/company/creativestudio",
      facebook: "https://facebook.com/creativestudio",
      instagram: "https://instagram.com/creativestudio",
    },
    verificationStatus: "verified",
    employees: [],
    jobs: [],
    createdAt: new Date("2018-03-15"),
    updatedAt: new Date("2023-09-20"),
    views: 980,
    rating: 4.8,
  },
]

// Mock applications
export const applications: Application[] = [
  {
    id: "1",
    jobId: "1",
    userId: "1",
    resumeId: "1",
    coverLetter:
      "Hurmatli ish beruvchi, men Senior Frontend Developer lavozimiga o'z nomzodimni taqdim etmoqchiman. Men 3 yildan ortiq React va TypeScript bilan ishlash tajribasiga egaman va sizning kompaniyangizda o'z bilim va ko'nikmalarimni qo'llashni istardim.",
    status: "pending",
    appliedAt: new Date("2023-11-16"),
    updatedAt: new Date("2023-11-16"),
    expectedSalary: {
      amount: 1500,
      currency: "USD",
      negotiable: true,
    },
  },
]

// Mock proposals
export const proposals: Proposal[] = [
  {
    id: "1",
    projectId: "1",
    freelancerId: "3",
    coverLetter:
      "Hurmatli mijoz, men sizning web sayt yaratish loyihangiz bilan qiziqaman. Men 5 yildan ortiq web saytlar yaratish tajribasiga egaman va sizning talablaringizga mos keladigan zamonaviy va responsive web sayt yaratishim mumkin.",
    bid: {
      amount: 800,
      currency: "USD",
      type: "fixed",
    },
    estimatedDuration: {
      value: 3,
      unit: "week",
    },
    status: "pending",
    submittedAt: new Date("2023-11-16"),
    updatedAt: new Date("2023-11-16"),
  },
]

// Mock conversations
export const conversations: Conversation[] = [
  {
    id: "1",
    participants: ["1", "2"],
    title: "Senior Frontend Developer vakansiyasi",
    type: "job",
    relatedId: "1",
    createdAt: new Date("2023-11-16"),
    updatedAt: new Date("2023-11-16"),
  },
]

// Mock messages
export const messages: Message[] = [
  {
    id: "1",
    conversationId: "1",
    senderId: "2",
    content: "Salom, sizning rezyumengiz bizni qiziqtirdi. Siz bilan suhbatlashishni xohlar edik.",
    readBy: ["2"],
    createdAt: new Date("2023-11-16T10:30:00"),
    updatedAt: new Date("2023-11-16T10:30:00"),
  },
  {
    id: "2",
    conversationId: "1",
    senderId: "1",
    content: "Salom! Rahmat, albatta suhbatlashishga tayyorman.",
    readBy: ["1", "2"],
    createdAt: new Date("2023-11-16T10:35:00"),
    updatedAt: new Date("2023-11-16T10:35:00"),
  },
  {
    id: "3",
    conversationId: "1",
    senderId: "2",
    content: "Ajoyib! Sizga qaysi vaqt qulay bo'ladi?",
    readBy: ["2"],
    createdAt: new Date("2023-11-16T10:40:00"),
    updatedAt: new Date("2023-11-16T10:40:00"),
  },
  {
    id: "4",
    conversationId: "1",
    senderId: "1",
    content: "Dushanba kuni soat 14:00 da bo'lsa yaxshi bo'lardi.",
    readBy: ["1"],
    createdAt: new Date("2023-11-16T10:45:00"),
    updatedAt: new Date("2023-11-16T10:45:00"),
  },
]

// Mock notifications
export const notifications: Notification[] = [
  {
    id: "1",
    userId: "1",
    type: "application_viewed",
    title: "Sizning arizangiz ko'rildi",
    message: "Tech Solutions kompaniyasi sizning Senior Frontend Developer lavozimiga arizangizni ko'rdi.",
    read: false,
    actionUrl: "/applications/1",
    createdAt: new Date("2023-11-17T09:15:00"),
  },
  {
    id: "2",
    userId: "1",
    type: "message_received",
    title: "Yangi xabar",
    message: "Tech Solutions kompaniyasidan yangi xabar oldingiz.",
    read: false,
    actionUrl: "/messages/1",
    createdAt: new Date("2023-11-16T10:30:00"),
  },
  {
    id: "3",
    userId: "1",
    type: "job_recommendation",
    title: "Sizga mos vakansiya",
    message: "Sizning ko'nikmalaringizga mos yangi vakansiya topildi: UI/UX Designer.",
    read: true,
    actionUrl: "/jobs/3",
    createdAt: new Date("2023-11-15T14:20:00"),
  },
]
