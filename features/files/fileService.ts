import Api from "../../api";

export const fetchRecords = async () => {
  const api = new Api();
  const response = await api.getRecords();
  return response.data;
};

export const fetchFolderFiles = async (id: string) => {
  const api = new Api();
  const response = await api.getFolderFiles(id);
  return response.data;
};

const carService = {
  fetchFolderFiles,
  fetchRecords,
};

export default carService;
