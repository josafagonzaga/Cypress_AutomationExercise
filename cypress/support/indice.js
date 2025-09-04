// numberedTest.js
export const createNumberedTest = (prefix = '1') => {
  let subCount = 1;

  return (title, callback) => {
    const fullTitle = `${prefix}.${subCount} - ${title}`;
    it(fullTitle, callback);
    subCount++;
  };
};
