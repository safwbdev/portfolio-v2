export default {
  // This is the display name for the type
  title: "Work",

  // The identifier for this document type used in the api's
  name: "work",

  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",

  // Now we proceed to list the fields of our document
  fields: [
    // This document has only one field
    {
      title: "Company Name",
      name: "companyName",
      type: "string",
    },
    {
      title: "Role",
      name: "role",
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
      title: "Tasks",
      name: "tasks",
      type: "blockContent",
    },
    {
      title: "company image",
      name: "companyImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
