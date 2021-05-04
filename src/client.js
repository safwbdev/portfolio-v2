import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.REACT_APP_API_KEY,
  dataset: "production",
});
