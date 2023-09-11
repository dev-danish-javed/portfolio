const App_Routes = {
  default: "/portfolio_2/about",
  ROOT: "/",
  ABOUT: "/portfolio_2/about",
  SKILLS: "/portfolio_2/skills",
  EDUCATION: "/portfolio_2/education",
  CONTACT: "/portfolio_2/contact",
  EXPERIENCE: {
    ROOT: "/portfolio_2/experience",
    default: "/portfolio_2/experience/paymentus",
    PAYMENTUS: "/portfolio_2/experience/paymentus",
    MINDFIRE: "/portfolio_2/experience/mindfire",
    SAPIENT: "/portfolio_2/experience/sapient",
    PROJECTS: {
      ROOT: "/portfolio_2/experience/projects",
      default: "/portfolio_2/experience/projects/my_space",
      MY_SPACE: "/portfolio_2/experience/projects/my_space",
      BAAN_BAINI: "/portfolio_2/experience/projects/baan_baini",
      PORTFOLIO: "/portfolio_2/experience/projects/portfolio",
    },
  },
};

export default App_Routes;
