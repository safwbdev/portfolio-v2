export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "icon",
      type: "text",
    },
    {
      name: "skillType",
      title: "Skill Type",
      type: "string",
      options: {
        list: [
          {
            value: "essential",
            title: "Essential",
          },
          {
            value: "technical",
            title: "Technical",
          },
          {
            value: "framework",
            title: "Framework",
          },
          {
            value: "library",
            title: "Library",
          },
          {
            value: "database",
            title: "Database",
          },
          {
            value: "content nanagement systems",
            title: "Content Management Systems",
          },
          {
            value: "os",
            title: "OS",
          },
          {
            value: "tools",
            title: "Tools",
          },
          {
            value: "design",
            title: "Design",
          },
        ],
      },
    },
  ],
};
