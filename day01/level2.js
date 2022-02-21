//import countries from "./countries.js";
//import webTechs from "./webtechs.js";

/* --------------- Object --------------- */
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//Find the person who has many skills in the users object.
const length = Object.values(users)
  .map((user) => user.skills.length)
  .sort()
  .reverse();

const biggerSkills = Object.entries(users)
  .map((user) => {
    let skills = user[1].skills.length;
    let nome = user[0];
    return [nome, skills];
  })
  .filter((user) => user[1] === length[0]);

//Count loggedin users,count users having greater than equal to 50 points from the following object.
const logged = Object.values(users)
  .map((dados) => dados.isLoggedIn)
  .filter((log) => log === true).length;

const greaterThan50 = Object.values(users)
  .map((dados) => dados.points)
  .filter((point) => point >= 50).length;
