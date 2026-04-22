import React, { useEffect, useMemo, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingBar from "react-top-loading-bar";
import { Toaster, toast } from "sonner";
import { useLocation, useNavigate } from "react-router-dom";
import resume from "./assets/Docs/Danish Javed Resume.pdf";
import angularCertificate from "./assets/Certificates/Angular_Certificate.png";
import javaScriptCertificate from "./assets/Certificates/JavaScript_Certificate.png";
import javaCertificate from "./assets/Certificates/Java_Certificate.png";
import microServicesCertificate from "./assets/Certificates/MicroServices_Certificate.jpg";
import problemSolvingCertificate from "./assets/Certificates/Problem_Solving_Certificate.png";
import reactCertificate from "./assets/Certificates/React_Certificate.png";
import angularIcon from "./assets/Tech Icons/Angular Icon.png";
import cssIcon from "./assets/Tech Icons/CSS Icon.png";
import dbIcon from "./assets/Tech Icons/DB Icon.png";
import dockerIcon from "./assets/Tech Icons/Docker Icon.png";
import gitIcon from "./assets/Tech Icons/Git Icon.png";
import htmlIcon from "./assets/Tech Icons/HTML Icon.png";
import javaIcon from "./assets/Tech Icons/Java Icon.png";
import javaScriptIcon from "./assets/Tech Icons/JavaScript Icon.png";
import jiraIcon from "./assets/Tech Icons/Jira Icon.png";
import microServicesIcon from "./assets/Tech Icons/MicroServices Icon.png";
import mongoDBIcon from "./assets/Tech Icons/MongoDB Icon.png";
import nodeIcon from "./assets/Tech Icons/Node Icon.png";
import reactIcon from "./assets/Tech Icons/React Icon.png";
import springbootIcon from "./assets/Tech Icons/Springboot Icon.png";
import typeScriptIcon from "./assets/Tech Icons/TypeScript Icon.png";
import myPic from "./assets/images/My Pic 2.png";

const ROUTES = {
  ABOUT: "/about",
  SKILLS: "/skills",
  EDUCATION: "/education",
  EXPERIENCE: "/experience",
  CONTACT: "/contact",
  PAY: "/experience/paymentus",
  MIND: "/experience/mindfire",
  PROJ: "/experience/projects",
  SAP: "/experience/sapient",
  MY: "/experience/projects/my_space",
  BAAN: "/experience/projects/baan_baini",
  PORT: "/experience/projects/portfolio",
};

const NAV_ITEMS = [
  ["About", ROUTES.ABOUT, "fa-user"],
  ["Skills", ROUTES.SKILLS, "fa-code"],
  ["Experience", ROUTES.EXPERIENCE, "fa-briefcase"],
  ["Education", ROUTES.EDUCATION, "fa-graduation-cap"],
  ["Contact", ROUTES.CONTACT, "fa-paper-plane"],
];

const PROFILE_ROLES = [
  "Full Stack Developer",
  "Back End Developer",
  "Front End Developer",
  "Software Engineer",
];

const ABOUT_STATS = [
  ["Experience", "5 years"],
  ["Profile", "Java Full Stack Dev."],
  ["Residence", "Noida, India"],
  ["Age", "28 years"],
];

const SERVICES = [
  [
    "Full Stack Development",
    "I can help develop and maintain full stack application. From interactive and beautiful UI to fast and secure APIs, I can do it all for you. And I can take care of databases as well.",
  ],
  [
    "Back-End Development",
    "I can help develop and maintain backend services. Along with strong understanding of programming concept and APIs, I have familiarity with cloud in AWS EC2 and S3. Also I can handle SQL and NoSQL databases as per requirements.",
  ],
  [
    "Front-End Development",
    "Responsive web design is one of key skills. I can help develope and maintain interactive and beautiful UI. I can make your websites look beautiful on any device be it mobile, desktop, laptop or tab or what-so-ever.",
  ],
  [
    "Website Deployment",
    "I can deploy and host your static websites for a broader reach. Add your Website url to cards and receipts and attract much more potential buyers.",
  ],
];

const SKILLS = [
  [javaIcon, 85, "Java"],
  [springbootIcon, 70, "SpringBoot"],
  [microServicesIcon, 67, "MicroServices"],
  [dockerIcon, 70, "Docker"],
  [nodeIcon, 60, "Node Js"],
  [angularIcon, 65, "Angular"],
  [reactIcon, 40, "React"],
  [javaScriptIcon, 75, "JavaScript"],
  [typeScriptIcon, 55, "TypeScript"],
  [mongoDBIcon, 40, "MongoDB"],
  [dbIcon, 50, "SQL"],
  [gitIcon, 65, "GIT"],
  [jiraIcon, 65, "Jira"],
  [htmlIcon, 75, "HTML"],
  [cssIcon, 55, "CSS"],
];

const CERTIFICATES = [
  [javaCertificate, "https://www.hackerrank.com/certificates/434371378a5d", "Java"],
  [microServicesCertificate, "https://www.udemy.com/certificate/UC-bc3f458b-13cd-439e-86c1-49c990669ff6/", "MicroServices"],
  [problemSolvingCertificate, "https://www.hackerrank.com/certificates/07a3f6563470", "Problem Solving"],
  [angularCertificate, "https://www.hackerrank.com/certificates/cdf5996c008d", "Angular"],
  [reactCertificate, "https://www.hackerrank.com/certificates/d039f1eba3c8", "React"],
  [javaScriptCertificate, "https://www.hackerrank.com/certificates/2c11f5fc8e38", "JavaScript"],
];

const glass = "rounded-3xl border border-white/70 bg-white/55 backdrop-blur-xl shadow-[0_14px_44px_rgba(83,99,90,0.12)]";

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", delay: d } }),
};

const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease: "easeIn" } },
};

const EXPERIENCE_TABS = [
  ["Paymentus", ROUTES.PAY],
  ["Mindfire", ROUTES.MIND],
  ["Projects", ROUTES.PROJ],
  ["Sapient", ROUTES.SAP],
];

const PROJECT_TABS = [
  ["My Space", ROUTES.MY],
  ["Baan Baini", ROUTES.BAAN],
  ["Portfolio", ROUTES.PORT],
];

const EXPERIENCE_DATA = {
  [ROUTES.PAY]: {
    title: "Paxcom - Paymentus",
    time: "Dec 2022 - Current",
    desc: "Paymentus (NYSE: PAY) is a leading provider of cloud-based bill payment technology and solutions. It delivers next-generation product suite through a modern technology stack to more than 1,300 billers across North America.",
    roles: [
      "Working on front-end and back-end technical solutions",
      "Providing custom implementation of existing features",
      "Fixing bugs",
      "Actively participating and taking scrum calls",
      "Generating detailed PRs",
      "Keeping track for ticket's testing and release with QA and release team",
    ],
    tools: ["Java", "SpringBoot", "Web APIs", "Microservices", "Freemarker", "Bootstrap", "HTML", "CSS", "JavaScript", "Oracle DB", "Tomcat Server", "Docker", "Jenkins", "Jira", "Git", "Bitbucket"],
  },
  [ROUTES.MIND]: {
    title: "Mindfire Solutions",
    time: "Dec 2020 - Nov 2022",
    desc: "Mindfire Solutions is a 22 years old software development and IT services company. I worked on a health care domain project that handled patient data management, insurance claims, and reports.",
    roles: ["Working on front-end and back-end technical solutions", "Implemented a dashboard to provide application insights", "Implemented reports export in PDF and Excel Format", "Actively participated in client calls", "Provided guidance to teammates"],
    tools: ["Java", "SpringBoot", "RestFul APIs", "Angular", "Bootstrap", "HTML", "CSS", "JavaScript", "Mongo DB", "Tomcat Server", "Jira", "Git", "Github"],
  },
  [ROUTES.SAP]: {
    title: "Publicis Sapient",
    time: "Jan 2020 - June 2020",
    desc: "Publicis Sapient is a digital transformation partner. I was part of a QA team for an e-commerce project and handled automation testing with Selenium and Cucumber.",
    roles: ["Worked on web automation testing with Selenium", "Added API test cases with Rest Assured", "Wrote multiple cucumber test suits", "Handled reports with Surefire and Cucumber", "Reported multiple test scenarios missed by manual testers"],
    tools: ["Java", "Selenium", "Rest Assured", "jUnit", "Cucumber", "Jenkins"],
  },
};

const PROJECT_DATA = {
  [ROUTES.MY]: {
    title: "My Space",
    github: "https://github.com/dev-danish-javed/My-Space-App",
    desc: "My Space is an open source solution to sharing data across multiple devices. It helped me solve file sharing across mobile and laptop without quality loss.",
    tools: ["Java", "SpringBoot", "RestFul APIs", "Thymeleaf", "Google Charts", "Bootstrap", "HTML", "CSS", "JavaScript", "Tomcat Server"],
    learnings: ["Got hand on with Spring Boot", "Gained familiarity with Java MVC", "Leaned about Thymeleaf", "Got stuck with transfer failures of large files", "Fixed the above issue by learning about BufferedReader"],
  },
  [ROUTES.BAAN]: {
    title: "Baan Baini",
    github: "https://github.com/dev-danish-javed/BaanBaini",
    desc: "Baan Baini is an small e-commerce application. It helped me learn application design and architecture by building an end-to-end system from scratch.",
    tools: ["Java", "SpringBoot", "Spring Security", "JWT", "RestFul APIs", "Tomcat Server", "AWS S3"],
    learnings: ["Strugged and learned Spring Security", "Gained familarity with Application Design", "Learned basics of AWS S3", "Practiced Spring Boot and securtiy"],
  },
  [ROUTES.PORT]: {
    title: "Portfolio",
    github: "https://github.com/dev-danish-javed/portfolio",
    desc: "This website gives a brief about me and my work. It helped me improve front-end capacity, routing, responsive web design, and UI understanding.",
    tools: ["React", "JavaScript", "Bootstrap", "Font Awesome", "HTML", "CSS"],
    learnings: ["Got started with React", "Learned React Routing", "Improved my responsive web design skills", "Gained some UI/UX experience", "Learned patience and consistency as this took me a good amount of time"],
  },
};

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8 border-b border-[#d8ddd8] pb-4">
      <h2 className="font-display text-[40px] font-black leading-[0.95] tracking-[-0.03em] text-[#2f3b35] sm:text-[56px]">{title}</h2>
      <p className="mt-2 max-w-3xl font-body text-[17px] leading-[1.75] text-[#56645d]">{subtitle}</p>
    </div>
  );
}

function NavItems({ activeMainRoute, onNavClick }) {
  return (
    <nav className="space-y-2">
      <p className="px-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6d7a73]">Navigate</p>
      {NAV_ITEMS.map(([name, route, icon], idx) => {
        const active = activeMainRoute === route;
        return (
          <motion.button
            key={route}
            custom={idx * 0.04}
            variants={itemVariants}
            initial="hidden"
            animate="show"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onNavClick(route)}
            className={`group flex min-h-11 w-full items-center justify-between rounded-2xl border px-3 py-2 text-left transition-all duration-300 ${
              active ? "border-[#8c5a52]/35 bg-gradient-to-r from-[#f5e9e5] to-[#f2efe5] shadow-[0_8px_24px_rgba(140,90,82,0.18)]" : "border-white/65 bg-white/55 hover:border-[#8c5a52]/25 hover:bg-white/80"
            }`}
          >
            <span className="flex items-center gap-3 text-[13px] font-semibold tracking-[0.01em]">
              <i className={`fa-solid ${icon} text-xs transition-transform duration-300 ${active ? "text-[#8c5a52]" : "text-[#70827a] group-hover:rotate-6"}`} />
              {name}
            </span>
            <span className={`h-2 w-2 rounded-full transition-all ${active ? "bg-[#8c5a52] shadow-[0_0_14px_rgba(140,90,82,0.5)]" : "bg-[#c7d2cc]"}`} />
          </motion.button>
        );
      })}
    </nav>
  );
}

function ProfileCard({ typedRole }) {
  return (
    <motion.div initial="hidden" animate="show" variants={itemVariants} custom={0.08} className="space-y-5">
      <div className="overflow-hidden rounded-[24px] border border-white/70 bg-white/55 p-2 shadow-[0_16px_34px_rgba(99,110,103,0.14)]">
        <img src={myPic} alt="Danish Javed profile" className="h-[260px] w-full rounded-[18px] object-cover object-top sm:h-[300px]" />
      </div>
      <div className="space-y-3">
        <h2 className="font-display text-[40px] font-black leading-[0.9] tracking-[-0.035em] text-[#2f3b35]">Danish Javed</h2>
        <p className="min-h-6 text-[17px] font-medium text-[#6f7f75]">{typedRole}</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <a href="https://github.com/dev-danish-javed" target="_blank" rel="noreferrer" className="flex min-h-11 items-center justify-center rounded-xl border border-white/70 bg-white/75 text-[13px] font-semibold text-[#3a443f] transition-all hover:-translate-y-0.5 hover:border-[#8c5a52]/30 hover:text-[#8c5a52]">GitHub</a>
        <a href="https://www.linkedin.com/in/devdanish/" target="_blank" rel="noreferrer" className="flex min-h-11 items-center justify-center rounded-xl border border-white/70 bg-white/75 text-[13px] font-semibold text-[#3a443f] transition-all hover:-translate-y-0.5 hover:border-[#8c5a52]/30 hover:text-[#8c5a52]">LinkedIn</a>
      </div>
      <a href="https://technotes.devdanish.in/" target="_blank" rel="noreferrer" className="block min-h-11 rounded-xl border border-white/70 bg-white/75 px-4 py-3 text-center text-[13px] font-semibold text-[#3a443f] transition-all hover:-translate-y-0.5 hover:border-[#8c5a52]/30 hover:text-[#8c5a52]">My Blogs</a>
      <a href={resume} download="Danish Javed Resume.pdf" className="group flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#8c5a52]/30 bg-gradient-to-r from-[#f3e6e2] to-[#f5f1e7] px-4 py-3 text-[13px] font-bold tracking-[0.03em] text-[#8c5a52] shadow-[0_12px_28px_rgba(140,90,82,0.18)] transition-all hover:-translate-y-0.5">Download Resume <i className="fa-solid fa-download transition-transform group-hover:translate-y-0.5" /></a>
    </motion.div>
  );
}

function AboutPage() {
  return (
    <div className="space-y-10 pt-4">
      <SectionTitle title="Designing thoughtful systems while shipping reliable software." subtitle="Hello! I'm Danish Javed, a Full-Stack Developer from Noida, India. I have rich experience in Java, SpringBoot, MicrosServices and Angular. I have understanding of databases as well. Currently, I am exploring AWS and React. I would love to hear back from you." />
      <div className="grid gap-4 sm:grid-cols-2">
        {ABOUT_STATS.map(([label, value], index) => (
          <motion.div key={label} custom={index * 0.06} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={itemVariants} className="rounded-2xl border border-white/70 bg-white/65 px-4 py-4 shadow-[0_10px_24px_rgba(99,110,103,0.09)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#718079]">{label}</p>
            <p className="mt-2 text-[22px] font-semibold text-[#2f3a35]">{value}</p>
          </motion.div>
        ))}
      </div>
      <div className="space-y-4">
        <div className="flex items-end justify-between border-b border-[#d8ddd8] pb-3">
          <h3 className="font-display text-[28px] font-bold tracking-[-0.02em] text-[#2d3731]">My Services</h3>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7b8b82]">What I can own end-to-end</span>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {SERVICES.map(([title, text], idx) => (
            <motion.article key={title} custom={idx * 0.06} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={itemVariants} className={`rounded-[22px] border border-white/70 bg-white/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:rotate-[0.2deg] hover:shadow-[0_16px_30px_rgba(95,110,100,0.15)] ${idx === 1 ? "md:col-span-3" : "md:col-span-2"}`}>
              <h4 className="text-[22px] font-semibold tracking-[-0.01em] text-[#334038]">{title}</h4>
              <p className="mt-3 font-body text-[15px] leading-[1.78] text-[#5d6a63]">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillsPage({ isGridSkillView, setIsGridSkillView }) {
  return (
    <div className="space-y-10 pt-4">
      <SectionTitle title="Craft across backend reliability and frontend clarity." subtitle="I have rich skill set for Full Stack Development. I primarily do Java and Node Js for backend services. Fast and secure RESTful Web Services and REST APIs are my key skill. For the frontend part, I can pick React and Angular along with Tailwind CSS and Bootstrap to create beautiful and responsive websites. I can handle both SQL and NoSQL databases and have little cloud exposure with AWS S3 and EC2." />
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d8ddd8] pb-3">
          <h3 className="font-display text-[28px] font-bold tracking-[-0.02em] text-[#2d3731]">Tech and Tools</h3>
          <motion.button whileTap={{ scale: 0.97 }} onClick={() => setIsGridSkillView((v) => !v)} className="min-h-11 rounded-xl border border-[#8c5a52]/30 bg-white/70 px-4 text-[13px] font-semibold text-[#8c5a52] transition-all hover:bg-[#f7ece8]">{isGridSkillView ? "Switch to List" : "Switch to Grid"}</motion.button>
        </div>
        <div className={`grid gap-3 ${isGridSkillView ? "sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
          {SKILLS.map(([icon, value, name], idx) => (
            <motion.div key={name} custom={idx * 0.03} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={itemVariants} className="rounded-2xl border border-white/70 bg-white/65 p-4 shadow-[0_8px_22px_rgba(98,110,104,0.08)] transition-all duration-300 hover:-translate-y-0.5">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3"><img src={icon} alt={name} className="h-8 w-8 rounded-lg object-contain bg-white/80 p-1.5" /><p className="text-[15px] font-semibold text-[#37443d]">{name}</p></div>
                <span className="text-[13px] font-semibold text-[#6f7f75]">{value}%</span>
              </div>
              <div className="h-2 rounded-full bg-[#e3e8e2]"><div className="h-2 rounded-full bg-gradient-to-r from-[#70967f] to-[#8c5a52]" style={{ width: `${value}%` }} /></div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {CERTIFICATES.map(([img, link, topic], idx) => (
          <motion.a key={topic} href={link} target="_blank" rel="noreferrer" custom={idx * 0.04} initial="hidden" whileInView="show" viewport={{ once: true }} variants={itemVariants} className="overflow-hidden rounded-[20px] border border-white/70 bg-white/60">
            <img src={img} alt={topic} className="h-36 w-full object-cover" />
            <div className="border-t border-[#dfe4df] px-4 py-3 text-[13px] font-semibold text-[#425048]">{topic}</div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}

function EducationPage({ onSapientClick }) {
  return (
    <div className="space-y-8 pt-4">
      <SectionTitle title="Built on strong technical foundations and disciplined learning." subtitle="I grew through institutions that shaped both technical confidence and execution discipline." />
      <article className="rounded-[24px] border border-white/70 bg-white/60 p-6">
        <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
          <h3 className="font-display text-[28px] font-bold tracking-[-0.02em] text-[#2d3731]">B.Tech - NIET</h3>
          <div className="text-right text-[13px] font-medium text-[#5c6a63]"><p className="font-semibold">Computer Science</p><p>June 2016 - Sept 2020</p></div>
        </div>
        <p className="font-body text-[17px] leading-[1.76] text-[#5d6a63]"><strong>Noida Institute of Engineering and Technology</strong> is affiliated to <strong>AKTU</strong> and accredited by <strong>NBA</strong>. I scored <strong>76%</strong> and received campus placement with <button onClick={onSapientClick} className="font-semibold text-[#8c5a52] underline-offset-4 hover:underline">Publicis Sapient</button>.</p>
      </article>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-[22px] border border-white/70 bg-white/60 p-5"><h3 className="font-display text-[28px] font-bold tracking-[-0.02em] text-[#2d3731]">12<sup>th</sup> - RLB</h3><p className="mt-3 font-body text-[17px] leading-[1.76] text-[#5d6a63]"><strong>Rani Laxmi Bai Memorial Senior Secondary School</strong>, CBSE, PCM 2016, final score <strong>68.4%</strong>.</p></article>
        <article className="rounded-[22px] border border-white/70 bg-white/60 p-5"><h3 className="font-display text-[28px] font-bold tracking-[-0.02em] text-[#2d3731]">10<sup>th</sup> - Galaxy</h3><p className="mt-3 font-body text-[17px] leading-[1.76] text-[#5d6a63]">Galaxy Residential Public School, CBSE, 2014, scored <strong>10 CGPA</strong> and served as <strong>Head Boy</strong>.</p></article>
      </div>
    </div>
  );
}

function ExperiencePage({ activeExperienceRoute, activeProjectRoute, onExperienceTabClick, onProjectTabClick }) {
  const data = EXPERIENCE_DATA[activeExperienceRoute];
  const project = PROJECT_DATA[activeProjectRoute];
  return (
    <div className="space-y-7 pt-4">
      <SectionTitle title="Experience across product teams, delivery cycles, and real users." subtitle="Cross-functional delivery with strong ownership in implementation, quality, and collaboration." />
      <div className="flex flex-wrap gap-2 rounded-2xl border border-white/70 bg-white/65 p-2">
        {EXPERIENCE_TABS.map(([title, route]) => (
          <motion.button key={route} whileTap={{ scale: 0.98 }} onClick={() => onExperienceTabClick(route)} className={`min-h-11 rounded-xl px-4 text-[13px] font-semibold transition-all ${activeExperienceRoute === route ? "bg-gradient-to-r from-[#f4e7e3] to-[#f2efe6] text-[#8c5a52]" : "bg-white/70 text-[#4a5851] hover:bg-white hover:text-[#8c5a52]"}`}>{title}</motion.button>
        ))}
      </div>
      {activeExperienceRoute !== ROUTES.PROJ ? (
        <div className="space-y-5">
          <div className="flex flex-wrap items-end justify-between gap-2 border-b border-[#d8ddd8] pb-3"><h3 className="font-display text-[28px] font-bold tracking-[-0.02em] text-[#2d3731]">{data.title}</h3><p className="text-[13px] font-medium text-[#5f6c65]">{data.time}</p></div>
          <p className="font-body text-[17px] leading-[1.76] text-[#5d6a63]">{data.desc}</p>
          <ul className="list-disc space-y-1 pl-5 font-body text-[17px] leading-[1.74] text-[#5d6a63]">{data.roles.map((r) => <li key={r}>{r}</li>)}</ul>
          <div className="flex flex-wrap gap-2">{data.tools.map((t) => <span key={t} className="rounded-full border border-[#d8dfda] bg-white/75 px-3 py-1.5 text-[13px] font-medium text-[#4c5952]">{t}</span>)}</div>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="flex flex-wrap gap-2 rounded-2xl border border-white/70 bg-white/65 p-2">{PROJECT_TABS.map(([title, route]) => <motion.button key={route} whileTap={{ scale: 0.98 }} onClick={() => onProjectTabClick(route)} className={`min-h-11 rounded-xl px-4 text-[13px] font-semibold transition-all ${activeProjectRoute === route ? "bg-gradient-to-r from-[#f4e7e3] to-[#f2efe6] text-[#8c5a52]" : "bg-white/70 text-[#4a5851]"}`}>{title}</motion.button>)}</div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d8ddd8] pb-3"><h3 className="font-display text-[28px] font-bold tracking-[-0.02em] text-[#2d3731]">{project.title}</h3><a href={project.github} target="_blank" rel="noreferrer" className="min-h-11 rounded-xl border border-[#8c5a52]/30 bg-white/75 px-4 py-2 text-[13px] font-semibold text-[#8c5a52]">GitHub</a></div>
          <p className="font-body text-[17px] leading-[1.76] text-[#5d6a63]">{project.desc}</p>
          <div className="flex flex-wrap gap-2">{project.tools.map((t) => <span key={t} className="rounded-full border border-[#d8dfda] bg-white/75 px-3 py-1.5 text-[13px] font-medium text-[#4c5952]">{t}</span>)}</div>
          <ul className="list-disc space-y-1 pl-5 font-body text-[17px] leading-[1.74] text-[#5d6a63]">{project.learnings.map((l) => <li key={l}>{l}</li>)}</ul>
        </div>
      )}
    </div>
  );
}

function ContactPage({ name, message, setName, setMessage, messageHref }) {
  return (
    <div className="space-y-8 pt-4">
      <SectionTitle title="Let's build something useful and durable." subtitle="Code, collab, or coffee? Shoot me a mail below, let's grow together." />
      <div className="overflow-hidden rounded-[22px] border border-white/70 bg-white/60 p-3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224096.33663241914!2d77.25281390517094!3d28.645133432818064!2m3!1f0!2f0!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1678040235576!5m2!1sen!2sin" className="h-[260px] w-full rounded-[16px] border border-[#d8dfda]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Noida map" />
        <a href="https://goo.gl/maps/D8mffzbxZgtD2FcC7" target="_blank" rel="noreferrer" className="mt-3 inline-block text-[13px] font-semibold text-[#8c5a52]"><i className="fa-solid fa-location-dot mr-1" /> Noida, India</a>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2"><span className="text-[13px] font-semibold text-[#5f6b65]">Your Name</span><input value={name} onChange={(e) => setName(e.target.value)} className="min-h-11 w-full rounded-xl border border-[#d8dfda] bg-white/85 px-4 py-2 text-[15px] text-[#37433d] outline-none focus:border-[#8c5a52]/45" placeholder="Name" /></label>
        <label className="space-y-2 md:col-span-2"><span className="text-[13px] font-semibold text-[#5f6b65]">Message</span><textarea value={message} onChange={(e) => setMessage(e.target.value)} className="min-h-[120px] w-full rounded-xl border border-[#d8dfda] bg-white/85 px-4 py-3 text-[15px] text-[#37433d] outline-none focus:border-[#8c5a52]/45" placeholder="Write your message" /></label>
      </div>
      <div className="flex flex-wrap gap-2">
        <button onClick={() => { navigator.clipboard.writeText("dev.danish.javed@gmail.com"); toast.success("Email copied", { description: "Now drop me a note." }); }} className="min-h-11 rounded-xl border border-[#d8dfda] bg-white/75 px-4 text-[13px] font-semibold text-[#435048]">dev.danish.javed@gmail.com <i className="fa-solid fa-copy ml-1" /></button>
        <a href={messageHref} className="min-h-11 rounded-xl border border-[#8c5a52]/30 bg-gradient-to-r from-[#f4e7e3] to-[#f2efe6] px-5 py-3 text-[13px] font-semibold text-[#8c5a52]">Send</a>
        <a href="https://www.linkedin.com/in/devdanish/" target="_blank" rel="noreferrer" className="min-h-11 rounded-xl border border-[#d8dfda] bg-white/75 px-4 py-3 text-[13px] font-semibold text-[#435048]">LinkedIn</a>
        <a href={resume} download="Danish Javed Resume.pdf" className="min-h-11 rounded-xl border border-[#d8dfda] bg-white/75 px-4 py-3 text-[13px] font-semibold text-[#435048]">Resume</a>
      </div>
    </div>
  );
}

function PageSkeleton() {
  return (
    <div className="animate-pulse space-y-4 pt-6">
      <div className="h-5 w-32 rounded bg-[#dfe5e0]" />
      <div className="h-14 w-[85%] rounded bg-[#e4e9e4]" />
      <div className="h-4 w-full rounded bg-[#e7ebe7]" />
      <div className="h-4 w-[92%] rounded bg-[#e7ebe7]" />
    </div>
  );
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const ref = useRef(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [typedRole, setTypedRole] = useState(PROFILE_ROLES[0]);
  const [isGridSkillView, setIsGridSkillView] = useState(true);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isRouteLoading, setIsRouteLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const activeMainRoute = useMemo(() => NAV_ITEMS.find((item) => location.pathname.startsWith(item[1]))?.[1] || ROUTES.ABOUT, [location.pathname]);
  const activeExperienceRoute = useMemo(() => (location.pathname.startsWith(ROUTES.PROJ) ? ROUTES.PROJ : EXPERIENCE_TABS.find(([, route]) => location.pathname.startsWith(route))?.[1] || ROUTES.PAY), [location.pathname]);
  const activeProjectRoute = useMemo(() => PROJECT_TABS.find(([, route]) => location.pathname.startsWith(route))?.[1] || ROUTES.MY, [location.pathname]);

  useEffect(() => { const onResize = () => setIsMobile(window.innerWidth < 1024); window.addEventListener("resize", onResize); return () => window.removeEventListener("resize", onResize); }, []);
  useEffect(() => { if (location.pathname === "/") navigate(ROUTES.ABOUT, { replace: true }); if (location.pathname === ROUTES.EXPERIENCE) navigate(ROUTES.PAY, { replace: true }); if (location.pathname === ROUTES.PROJ) navigate(ROUTES.MY, { replace: true }); }, [location.pathname, navigate]);
  useEffect(() => { ref.current?.continuousStart(); setIsRouteLoading(true); const doneTimer = setTimeout(() => { ref.current?.complete(); setIsRouteLoading(false); }, 420); return () => clearTimeout(doneTimer); }, [location.pathname]);
  useEffect(() => { let roleIndex = 0; let charIndex = 0; let reverse = false; const interval = setInterval(() => { const role = PROFILE_ROLES[roleIndex]; const next = reverse ? role.slice(0, charIndex--) : role.slice(0, charIndex++); setTypedRole(next || " "); if (!reverse && charIndex > role.length + 8) reverse = true; if (reverse && charIndex < 0) { reverse = false; roleIndex = (roleIndex + 1) % PROFILE_ROLES.length; charIndex = 0; } }, 85); return () => clearInterval(interval); }, []);
  useEffect(() => setIsDrawerOpen(false), [location.pathname]);

  const goTo = (route) => { if ("vibrate" in navigator) navigator.vibrate([35]); navigate(route); };
  const messageHref = name && message ? `mailto:dev.danish.javed@gmail.com?subject=${encodeURIComponent(`${name} (via portfolio)`)}&body=${encodeURIComponent(`${message}\n\nSent from Portfolio`)}` : "mailto:dev.danish.javed@gmail.com";
  const page = activeMainRoute === ROUTES.ABOUT ? <AboutPage /> : activeMainRoute === ROUTES.SKILLS ? <SkillsPage isGridSkillView={isGridSkillView} setIsGridSkillView={setIsGridSkillView} /> : activeMainRoute === ROUTES.EDUCATION ? <EducationPage onSapientClick={() => goTo(ROUTES.SAP)} /> : activeMainRoute === ROUTES.EXPERIENCE ? <ExperiencePage activeExperienceRoute={activeExperienceRoute} activeProjectRoute={activeProjectRoute} onExperienceTabClick={goTo} onProjectTabClick={goTo} /> : <ContactPage name={name} message={message} setName={setName} setMessage={setMessage} messageHref={messageHref} />;

  return (
    <div className="min-h-screen bg-[#f6f6f2] font-ui text-[#38423d] antialiased">
      <Analytics mode="production" />
      <div className="pointer-events-none fixed inset-0 overflow-hidden"><div className="absolute -left-20 -top-24 h-80 w-80 rounded-full bg-[#d9e6dc]/70 blur-3xl" /><div className="absolute right-[-120px] top-[20%] h-96 w-96 rounded-full bg-[#ead5cf]/55 blur-3xl" /></div>
      <LoadingBar color="#8c5a52" height={4} shadow={false} loaderSpeed={900} ref={ref} />
      <Toaster richColors closeButton position="top-right" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-3 pb-4 pt-3 sm:px-6 sm:pb-6 sm:pt-6 lg:px-8 lg:py-8">
        <header className={`${glass} mb-3 flex items-center justify-between px-4 py-3 lg:hidden`}><div><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6d7a73]">Portfolio</p><h1 className="font-display text-[28px] font-black leading-none tracking-[-0.03em] text-[#2d3731]">Danish Javed</h1></div><motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} onClick={() => setIsDrawerOpen((v) => !v)} className="min-h-11 min-w-11 rounded-2xl border border-[#8c5a52]/30 bg-white/70 px-3 text-[#8c5a52]"><i className="fa-solid fa-bars" /></motion.button></header>
        <div className="grid flex-1 gap-4 lg:grid-cols-[220px_minmax(290px,360px)_1fr]">
          <aside className={`${glass} hidden p-4 lg:block`}><NavItems activeMainRoute={activeMainRoute} onNavClick={goTo} /></aside>
          <aside className={`${glass} h-fit p-4`}><ProfileCard typedRole={typedRole} /></aside>
          <main className={`${glass} min-h-[68vh] overflow-hidden`}><div className="h-full overflow-y-auto px-4 pb-8 pt-2 sm:px-8 sm:pb-10 sm:pt-4"><AnimatePresence mode="wait"><motion.section key={location.pathname} {...pageTransition}>{isRouteLoading ? <PageSkeleton /> : page}</motion.section></AnimatePresence></div></main>
        </div>
      </div>
      <AnimatePresence>{isDrawerOpen && isMobile && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 lg:hidden"><button className="absolute inset-0 bg-[#313a35]/35 backdrop-blur-[2px]" onClick={() => setIsDrawerOpen(false)} aria-label="Close navigation" /><motion.aside initial={{ x: -260 }} animate={{ x: 0 }} exit={{ x: -260 }} transition={{ type: "spring", damping: 24, stiffness: 250 }} className={`${glass} absolute left-3 top-3 w-[78vw] max-w-[310px] p-4`}><NavItems activeMainRoute={activeMainRoute} onNavClick={goTo} /></motion.aside></motion.div>}</AnimatePresence>
    </div>
  );
}

export default App;
