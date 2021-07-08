const initialSate = {
  home: true,
  about: false,
  resume: false,
  portfolio: false,
  contact: false,
};

const Navigation = (state = initialSate, action) => {
  switch (action.type) {
    case "HOME":
      return (state = {
        home: true,
        about: false,
        resume: false,
        portfolio: false,
        contact: false,
      });
    case "ABOUT":
      return (state = {
        home: false,
        about: true,
        resume: false,
        portfolio: false,
        contact: false,
      });

    case "RESUME":
      return (state = {
        home: false,
        about: false,
        resume: true,
        portfolio: false,
        contact: false,
      });

    case "PORTFOLIO":
      return (state = {
        home: false,
        about: false,
        resume: false,
        portfolio: true,
        contact: false,
      });

    case "CONTACT":
      return (state = {
        home: false,
        about: false,
        resume: false,
        portfolio: false,
        contact: true,
      });
    default:
      return state;
  }
};

export default Navigation;
