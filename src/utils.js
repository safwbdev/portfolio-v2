import sanityClient from "./client.js";

export const getDownloadUrl = (ref) => {
  let formatUri = ref.replace("file-", "");
  let convertUri = formatUri.replace("-", ".");
  let fullUrl = `https://cdn.sanity.io/files/${process.env.REACT_APP_API_KEY}/production/${convertUri}?dl`;
  return fullUrl;
};

export const retrieveData = async (query, setData, setCount) => {
  try {
    const data = await sanityClient.fetch(query);
    if (data) {
      setData(data);

      setCount((arr) => [...arr, "a"]);
    }
  } catch (error) {
    console.log(error);
  }
};
