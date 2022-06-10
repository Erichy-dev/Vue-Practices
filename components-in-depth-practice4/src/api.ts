import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8080/",
});
export default async () => {
  const importedArr = await axiosInstance.get("/")
  return importedArr.data;
}
