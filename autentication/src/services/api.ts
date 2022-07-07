import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";
import { signOut } from "../contexts/AuthContext";
import { AuthTokenError } from "../errors/AuthTokenError";

// verifica se eu estou atulizando o token ou não
let isRefreshing = false;

// fila de todas as requests que falharam
let failedRequestQueue = [];

export function setupAPIClient(ctx = undefined) {
  // pego todos os cookies da minha aplicação
  let cookies = parseCookies(ctx);

  // Aqui eu estou exportando qual é minha url da api de autenticação!
  const api = axios.create({
    // crio a minha URL base
    baseURL: "http://localhost:3333",
    // crio o cabeçalho da minha request
    headers: {
      // Authorization é um padrão para passar cookies e eu passo eles dentro de Bearer
      Authorization: `Bearer ${cookies["autentication.token"]}`,
    },
  });

  // intercepto a resposta da minha api e faço uma verificação
  api.interceptors.response.use(
    // se ela for ok somente devolve da mesma maneira que veio
    (response) => response,
    // se ela der erro
    (error: AxiosError) => {
      // faz a verificação se tem erro 401 que é negar acesso
      if (error.response.status === 401) {
        // faz a verificação do status do erro de token
        if (error.response.data?.code === "token.expired") {
          // renovar o token

          // atualiza a variavel que contem os cookies
          cookies = parseCookies(ctx);

          // pego de dentro de cookies o meu refreshToken
          const { "autentication.refreshToken": refreshToken } = cookies;

          // todas as informações da requisição para o back-end
          const originalConfig = error.config;

          if (!isRefreshing) {
            // mudo para que não faça uma proxima refreshing
            isRefreshing = true;

            // faço uma requisição para a api de refresh passando meu refreshToken
            api
              .post("/refresh", {
                refreshToken,
              })
              .then((response) => {
               

                // pego o meu token da resposta

                const { token } = response.data;

                // função da lib nookies para salvar os cookies
                setCookie(ctx, "autentication.token", token, {
                  // validade do cookie em storage
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  // quais locais do meu app vão poder acessar o cookie (/) é todos
                  path: "/",
                });

                setCookie(
                  ctx,
                  "autentication.refreshToken",
                  response.data.refreshToken,
                  {
                    // validade do cookie em storage
                    maxAge: 60 * 60 * 24 * 30, // 30 days
                    // quais locais do meu app vão poder acessar o cookie (/) é todos
                    path: "/",
                  }
                );

                // Estou atualizando a minha header da api enviando o token quando ele está autenticado
                // antes disso ela fica com o token Undefined
                api.defaults.headers["Authorization"] = `Bearer ${token}`;

                // vou dentro da minha pilha e pra cada indice eu executo o metodo atulizando o token
                failedRequestQueue.forEach((request) =>
                  request.onSuccess(token)
                );

                // Após o processo eu limpo a pilha
                failedRequestQueue = [];
              })
              .catch((err) => {
                // se der erro eu chamo o metodo de erro

                // vou dentro da minha pilha e pra cada indice eu executo o metodo atulizando o token
                failedRequestQueue.forEach((request) => request.onFailure(err));

                // Após o processo eu limpo a pilha
                failedRequestQueue = [];

                if (process.browser) {
                  signOut();
                }else{
                  return Promise.reject(new AuthTokenError())
                }
              })
              .finally(() => {
                isRefreshing = false;
                // quando finaliza ele volta a let para falso novamente
              });
          }

          // se ela negar o if cai no return que gera uma promise
          return new Promise((resolve, reject) => {
            // joga pra dentro da minha pilha dois atributos
            failedRequestQueue.push({
              onSuccess: (token: string) => {
                // passa o meu novo token passando pra dentro do header
                originalConfig.headers["Authorization"] = `Bearer ${token}`;
                // faz novamente a api request, usando tudo que eu já tinha de dado e o novo token
                resolve(api(originalConfig));
              },
              onFailure: (err: AxiosError) => {
                // se der erro ele rejeita tudo
                reject(err);
              },
            });
          });
        } else {
          //deslogar o usuario
          if (process.browser) {
            signOut();
          }
        }
      }

      return Promise.reject(error);
    }
  );

  return api;
}
