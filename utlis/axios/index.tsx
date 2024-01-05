import constants from "@/constants";
import axios, { AxiosRequestConfig } from "axios";

function Axios<T>(configs: AxiosRequestConfig) {
  if (typeof window !== "undefined") {
    axios.defaults.headers["authorization"] = `Bearer ${localStorage.getItem(
      "token"
    )}`;
  }
  const axs = axios<T>({ ...configs, baseURL: constants.baseURL });
  return axs;
}

export default Axios;
