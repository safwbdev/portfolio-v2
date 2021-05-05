export const PROFILE_QUERY = `*[_type == "user"]{
    name,
    role,
    phone,
    email,
    location,
    githubLink,
    linkedInlink,
    desc,
    userImage{
        asset->{
            _id,
            url
        },
        alt
    }         
}`;

export const ESSENTIAL_QUERY = `*[_type == "skills" && skillType == "essential"] | order(name){
    name,
    icon,
    skillType
}`;
export const TECHNICAL_QUERY = `*[_type == "skills" && skillType == "technical"]  | order(name){
    name,
    icon,
    skillType
}`;
export const FRAMEWORK_QUERY = `*[_type == "skills" && skillType == "framework"]  | order(name){
    name,
    icon,
    skillType
}`;
export const LIBRARY_QUERY = `*[_type == "skills" && skillType == "library"]  | order(name){
    name,
    icon,
    skillType
}`;
export const DATABASE_QUERY = `*[_type == "skills" && skillType == "database"]  | order(name){
    name,
    icon,
    skillType
}`;
export const CMS_QUERY = `*[_type == "skills" && skillType == "cms"]  | order(name){
    name,
    icon,
    skillType
}`;
export const OS_QUERY = `*[_type == "skills" && skillType == "os"]  | order(name){
    name,
    icon,
    skillType
}`;
export const TOOLS_QUERY = `*[_type == "future" && skillStatus == "future"]{
    name
}`;
export const WORK_QUERY = `*[_type == "work"]  | order(endDate desc){
    companyName,
    role,
    startDate,
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
export const EDUCATION_QUERY = `*[_type == "education"] | order(endDate desc) {
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
export const DESIGN_QUERY = `*[_type == "skills" && skillType == "design"]  | order(name){
    name,
    icon,
    skillType
}`;
export const LEARNING_QUERY = `*[_type == "future" && skillStatus == "learning"]  | order(name){
    name
}`;
export const FUTURE_QUERY = `*[_type == "future" && skillStatus == "future"]{
    name
}`;
