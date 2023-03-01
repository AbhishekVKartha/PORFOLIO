import ACTION_TYPES from "../constants/actionTypes";
import projectImages from "../constants/images";

const initialState = {
  themeName: "",
  name: "Abhishek Valavakkadu Vanajakshan Kartha",
  designation: "Test Engineer",
  profileSummary: `I am a self directed and motivated software developer,
working eﬀectively in dynamic environment, where I can
apply my knowledge and skills for continuous improvement.`,
  linkedin: "https://www.linkedin.com/in/eldhose-m-peter-48867411a/",
  github: "https://github.com/eldhosempeter07",
  emailId: "abhishekvkartha98@gmail.com",
  educationDetails: [
    {
      educationName: "Diploma in Electronics and Communication",
      collegeName: "Government Polytechnic College Perumbavoor",
      year: "2016-2019",
      location: "Ernakulam, Kerala",
      details: `Graduated with a 8.5 GPA from state board of technical education, Kerala`,
    },
    {
      educationName: "Higher Secondary Education",
      collegeName: " Stmary's Higher Secondary School Morakkala",
      year: "2014-2016",
      location: "Ernakulam, Kerala",
      details: `Passed with a 75 % from Board of Higher Secondary Education, Kerala`,
    },
    {
      educationName: "High School Education",
      collegeName: " Stmary's Higher Secondary School Morakkala",
      year: "2013-2014",
      location: "Ernakulam, Kerala",
      details: `Passed with a 96% from Board of Public Examination, Kerala`,
    },
  ],
  workExperience: [
    {
      designation: "Test Engineer",
      companyName: " Sfo Technologies Digital Pvt. Ltd.",
      year: "09/2022-present",
      location: "Kochi, India",
      details: `• Expert in Test Automation & Functional Circuit Testing.
        • Test system Design (Requirement based testing) and development.
        • Exposure in test software development using Python and C.
        • Spectrum analyzer, Power sensor, Signal generator etc `,
    },
    {
      designation: "Rolling stock technician",
      companyName: " Asa Bhanu Technical Services Limited ",
      year: "08/2019-01/2022",
      location: "Kochi, India",
      details: `
        • Worked for Kochi Metro Rail Limited under " Asa Bhanu Technical Services Limited and have a vast knowledge about systems and sub systems of Metro trains .
        • DIT-MCO tester programming and validation, Boundary scan testing, Machine communication using RS232 interface etc.
        • Hands on experience with RF equipments such as Network analyzers, 
        `,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.THEME_CHANGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
