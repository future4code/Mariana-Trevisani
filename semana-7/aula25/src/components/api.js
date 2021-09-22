import axios from "axios";

const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api";
const headers = {
  "api-token": "00e30928fa107f4157583e5631d18f95"
};

export const getAllUsers = () => {
  return axios(`${baseURL}/usuario/getAllUsers`, { headers });
};

export const requisicaoCriarUsuario = (name, email) => {
  const body = { name, email };
  return axios.post(`${baseURL}/usuario/criarUsuario`, body, {
    headers,
    method: "POST"
  });
};

export const excluirUsuario = userId => {
  return axios.delete(`${baseURL}/usuario/excluirUsuario?id=${userId}`, {
    headers
  });
};
