import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";
import { AuthTokenError } from "../errors/AuthTokenError";
import { destroyCookie } from "nookies";
export function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api
      .get("/me")
      .then((response) => console.log(response))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <h1>Dashboard: {user?.email}</h1>;
}

// Método SSR (O getServerSideProps) é executado pelo lado do server antes de aparecer algo
// O parametro ctx ele passa todas as informações do client para o server (usando req.cookies)
// posso pegar os cookies
export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get("/me");

  return {
    props: {},
  };
});
