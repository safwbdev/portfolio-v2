export default {
  // This is the display name for the type
  title: "User",

  // The identifier for this document type used in the api's
  name: "user",

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
      title: "Role",
      name: "role",
      type: "string",
    },
    {
      title: "Phone",
      name: "phone",
      type: "string",
    },
    {
      title: "Email",
      name: "email",
      type: "string",
    },
    {
      title: "github Link",
      name: "githubLink",
      type: "string",
    },
    {
      title: "LinkedIn Link",
      name: "linkedInlink",
      type: "string",
    },
    {
      title: "Description",
      name: "desc",
      type: "text",
    },
    {
      title: "Location",
      name: "location",
      type: "string",
    },
    {
      title: "User image",
      name: "userImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "File Upload",
      name: "fileUpload",
      type: "file",
     
    },
  ],
};
