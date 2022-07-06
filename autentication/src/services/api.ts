import axios from "axios";
import { parseCookies } from "nookies";

// pego todos os cookies da minha aplicação
const cookies = parseCookies();

// Aqui eu estou exportando qual é minha url da api de autenticação!
export const api = axios.create({
  // crio a minha URL base
  baseURL: "http://localhost:3333",
  // crio o cabeçalho da minha request
  headers: {
    // Authorization é um padrão para passar cookies e eu passo eles dentro de Bearer
    Authorization: `Bearer ${cookies["autentication.token"]}`,
  },
});
