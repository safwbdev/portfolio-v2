export default {
  // This is the display name for the type
  title: "Future Skills",

  // The identifier for this document type used in the api's
  name: "future",

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
      title: "Skill status",
      name: "skillStatus",
      type: "string",
      options: {
        list: [
          {
            title: "Learning",
            value: "learning",
          },
          {
            title: "Future",
            value: "future",
          },
        ],
      },
    },
  ],
};
