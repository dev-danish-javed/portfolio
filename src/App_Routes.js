const App_Routes = {
  default: "/about",
  ROOT: "/",
  ABOUT: "/about",
  SKILLS: "/skills",
  EDUCATION: "/education",
  CONTACT: "/contact",
  EXPERIENCE: {
    ROOT: "/experience",
    default: "/experience/paymentus",
    PAYMENTUS: "/experience/paymentus",
    MINDFIRE: "/experience/mindfire",
    SAPIENT: "/experience/sapient",
    PROJECTS: {
      ROOT: "/experience/projects",
      default: "/experience/projects/my_space",
      MY_SPACE: "/experience/projects/my_space",
      BAAN_BAINI: "/experience/projects/baan_baini",
      PORTFOLIO: "/experience/projects/portfolio",
    },
  },
};

export default App_Routes;
