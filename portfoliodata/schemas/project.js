export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      title: "Description",
      name: "desc",
      type: "text",
    },
    {
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          {
            value: "personal",
            title: "Personal",
          },
          {
            value: "client",
            title: "Client",
          },
          {
            value: "game",
            title: "Game",
          },
        ],
      },
    },
    {
      name: "Gihub Link",
      name: "githubLink",
      type: "url",
    },
    {
      name: "Demo Link",
      name: "demoLink",
      type: "url",
    },
    {
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      // options: {
      //   to: { type: "skills" },
      // },
    },
    {
      title: "project image",
      name: "projectImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  options: {
    layout: "tags",
  },
};
