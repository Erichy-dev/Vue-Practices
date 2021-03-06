import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8080/",
});
export default async () => {
  const importedArr = await axiosInstance.get("/")
  return importedArr.data;
}
export async function postContent(addedHero: string) {
  const postedHero = await axiosInstance.post("/", { addedHero });
  return postedHero.data;
}