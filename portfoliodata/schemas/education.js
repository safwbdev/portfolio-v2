export default {
  // This is the display name for the type
  title: "Education",

  // The identifier for this document type used in the api's
  name: "education",

  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",

  // Now we proceed to list the fields of our document
  fields: [
    // This document has only one field
    {
      title: "School Name",
      name: "schoolName",
      type: "string",
    },
    {
      title: "Field",
      name: "field",
      type: "string",
    },
    {
      title: "Location",
      name: "location",
      type: "string",
    },
    {
      title: "Start Date",
      name: "startDate",
      type: "datetime",
    },
    {
      title: "End Date",
      name: "endDate",
      type: "datetime",
    },

    {
      title: "Edu image",
      name: "eduImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
