import axios from "axios";
const axiosFetch = axios.create({
  baseURL: process.env.backendUrl,
  // baseURL: "http://localhost:8080/user",
  // baseURL: "http://localhost:8080",
  timeout: 8000,
});

const axiosFetchType = (token: string) =>
  axios.create({
    baseURL: process.env.backendUrl ,
    headers: {
      Authorization: `${token}`,
    },
  });
  const axiosFetchDoctor = (token: string) =>
    axios.create({
      baseURL: process.env.backendUrl + "/doctor",
      headers: {
        Authorization: `${token}`,
      },
    });
    const axiosFetchPatient = (token: string) =>
        axios.create({
          baseURL: process.env.backendUrl + "/patient",
          headers: {
            Authorization: `${token}`,
          },
        });
export { axiosFetch, axiosFetchPatient,axiosFetchDoctor ,axiosFetchType };