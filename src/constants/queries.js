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

export const QUERY = {
  cms: cmsQuery,
  database: databaseQuery,
  design: designQuery,
  education: educationQuery,
  essential: essentialQuery,
  framework: frameworkQuery,
  future: futureQuery,
  learning: learningQuery,
  library: libraryQuery,
  os: osQuery,
  profile: profileQuery,
  projects: projectsQuery,
  technical: technicalQuery,
  tools: toolsQuery,
  work: workQuery,
  games: gamesQuery,
};
