const App_Routes = {
  default: "/portfolio/about",
  ROOT: "/portfolio",
  ABOUT: "/portfolio/about",
  SKILLS: "/portfolio/skills",
  EDUCATION: "/portfolio/education",
  CONTACT: "/portfolio/contact",
  EXPERIENCE: {
    ROOT: "/portfolio/experience",
    default: "/portfolio/experience/paymentus",
    PAYMENTUS: "/portfolio/experience/paymentus",
    MINDFIRE: "/portfolio/experience/mindfire",
    SAPIENT: "/portfolio/experience/sapient",
    PROJECTS: {
      ROOT: "/portfolio/experience/projects",
      default: "/portfolio/experience/projects/my_space",
      MY_SPACE: "/portfolio/experience/projects/my_space",
      BAAN_BAINI: "/portfolio/experience/projects/baan_baini",
      PORTFOLIO: "/portfolio/experience/projects/portfolio",
    },
  },
};

export default App_Routes;
