const getPost = async () => {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("RESPONSE");
    }, 4000);
  });
  return response;
};

export default getPost;
