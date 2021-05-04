export default {
  // This is the display name for the type
  title: "Skills",

  // The identifier for this document type used in the api's
  name: "skills",

  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",

  // Now we proceed to list the fields of our document
  fields: [
    // This document has only one field
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Skill Type",
      name: "skillType",
      type: "string",
      options: {
        list: [
          {
            title: "Essential",
            value: "essential",
          },
          {
            title: "Technical",
            value: "technical",
          },
          {
            title: "Framework",
            value: "framework",
          },
          {
            title: "Library",
            value: "library",
          },
          {
            title: "Database",
            value: "database",
          },
          {
            title: "Content Mangement Systems",
            value: "cms",
          },
          {
            title: "OS",
            value: "os",
          },
          {
            title: "Tools",
            value: "tools",
          },
          {
            title: "Design",
            value: "design",
          },
        ],
      },
    },
    {
      title: "Icon",
      name: "icon",
      type: "string",
    },
  ],
};
