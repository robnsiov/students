import axios, { AxiosRequestConfig } from "axios";

const Axios = (configs: AxiosRequestConfig) => {
  const axs = axios(configs);
  return axs;
};

export default Axios;
