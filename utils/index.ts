//a function to check the file extension of a string
export const checkFileExtension = (fileName: string, extension: string) => {
  return fileName.endsWith(extension);
};

export const isAPDFOrExcelFile = (fileName: string) => {
  return (
    checkFileExtension(fileName, "pdf") ||
    checkFileExtension(fileName, "zip") ||
    checkFileExtension(fileName, "txt") ||
    checkFileExtension(fileName, "doc") ||
    checkFileExtension(fileName, "exe") ||
    checkFileExtension(fileName, "xlsx")
  );
};

export const isAPDFFile = (fileName: string) => {
  return (
    checkFileExtension(fileName, "pdf") ||
    checkFileExtension(fileName, "zip") ||
    checkFileExtension(fileName, "txt") ||
    checkFileExtension(fileName, "exe")
  );
};

export const isAnExcelFile = (fileName: string) => {
  return checkFileExtension(fileName, "xlsx");
};

export const isAnImageFile = (fileName: string) => {
  return (
    checkFileExtension(fileName, "png") ||
    checkFileExtension(fileName, "jpg") ||
    checkFileExtension(fileName, "jpeg") ||
    checkFileExtension(fileName, "svg")
  );
};

//sort an array of objects by a key
export const sortArrayByKey = (array: any[], key: string) => {
  return array.sort((a, b) => {
    return a[key] - b[key];
  });
};
