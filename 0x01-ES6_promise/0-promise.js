const getResponseFromAPI = () => {
  return new Promise((resolve, reject) => {
    const a = 1 + 1;
    if (a === 2) {
      resolve('Success');
    } else {
      reject(new Error('Failed'));
    }
  });
};

export default getResponseFromAPI;

