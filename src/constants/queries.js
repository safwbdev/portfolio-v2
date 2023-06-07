const cmsQuery = `*[_type == "skills" && skillType == "cms"]  | order(name){
    name,
    icon,
    skillType
}`;
const databaseQuery = `*[_type == "skills" && skillType == "database"]  | order(name){
    name,
    icon,
    skillType
}`;
const designQuery = `*[_type == "skills" && skillType == "design"]  | order(name){
    name,
    icon,
    skillType
}`;
const educationQuery = `*[_type == "education"] | order(endDate desc) {
    schoolName,
    field,
    location,
    startDate,
    endDate,
    eduImage{
        asset->{
            _id,
            url
        },
        alt
    }
}`;
const essentialQuery = `*[_type == "skills" && skillType == "essential"] | order(name){
    name,
    icon,
    skillType
}`;
const frameworkQuery = `*[_type == "skills" && skillType == "framework"]  | order(name){
    name,
    icon,
    skillType
}`;
const futureQuery = `*[_type == "future" && skillStatus == "future"]{
    name
}`;
const learningQuery = `*[_type == "future" && skillStatus == "learning"]  | order(name){
    name
}`;
const libraryQuery = `*[_type == "skills" && skillType == "library"]  | order(name){
    name,
    icon,
    skillType
}`;
const osQuery = `*[_type == "skills" && skillType == "os"]  | order(name){
    name,
    icon,
    skillType
}`;
const profileQuery = `*[_type == "user"]{
    name,
    role,
    phone,
    email,
    location,
    githubLink,
    linkedInlink,
    fileUpload,
    desc,
    userImage{
        asset->{
            _id,
            url
        },
        alt
    }         
}`;

const projectsQuery = `*[_type == "project" && projectType != "game"] | order(projectType){
    title,
    desc,
    projectType,
    githubLink,
    demoLink,
    tags,
    projectImage{
        asset->{
            _id,
            url
        },
        alt
    }
}`;

const technicalQuery = `*[_type == "skills" && skillType == "technical"]  | order(name){
    name,
    icon,
    skillType
}`;
const toolsQuery = `*[_type == "skills" && skillType == "tools"]  | order(name){
    name,
    icon,
    skillType
}`;
const workQuery = `*[_type == "work"]  | order(startDate desc){
    _id,
    companyName,
    role,
    startDate,
    location,
    endDate,
    tasks,
    companyImage{
      asset->{
          _id,
          url
      },
      alt
    }
}`;

const gamesQuery = `*[_type == "project" && projectType == "game"] | order(projectType){
    title,
    desc,
    projectType,
    githubLink,
    demoLink,
    tags,
    projectImage{
        asset->{
            _id,
            url
        },
        alt
    }
}`;

export const DATA_TYPE = {
  CMS: "cms",
  DATABASE: "database",
  DESIGN: "design",
  EDUCATION: "education",
  ESSENTIAL: "essential",
  FRAMEWORK: "framework",
  FUTURE: "future",
  LEARNING: "learning",
  LIBRARY: "library",
  OS: "os",
  PROFILE: "profile",
  PROJECTS: "projects",
  TECHNICAL: "technical",
  TOOLS: "tools",
  WORK: "work",
  GAMES: "games",
};

export const PATTERN = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
  "Enter",
];

export const QUERY = [
  { name: DATA_TYPE.CMS, db: cmsQuery },
  { name: DATA_TYPE.DATABASE, db: databaseQuery },
  { name: DATA_TYPE.DESIGN, db: designQuery },
  { name: DATA_TYPE.EDUCATION, db: educationQuery },
  { name: DATA_TYPE.ESSENTIAL, db: essentialQuery },
  { name: DATA_TYPE.FRAMEWORK, db: frameworkQuery },
  { name: DATA_TYPE.FUTURE, db: futureQuery },
  { name: DATA_TYPE.LEARNING, db: learningQuery },
  { name: DATA_TYPE.LIBRARY, db: libraryQuery },
  { name: DATA_TYPE.OS, db: osQuery },
  { name: DATA_TYPE.PROFILE, db: profileQuery },
  { name: DATA_TYPE.PROJECTS, db: projectsQuery },
  { name: DATA_TYPE.TECHNICAL, db: technicalQuery },
  { name: DATA_TYPE.TOOLS, db: toolsQuery },
  { name: DATA_TYPE.WORK, db: workQuery },
  { name: DATA_TYPE.GAMES, db: gamesQuery },
];
