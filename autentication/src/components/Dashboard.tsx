import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";
import { AuthTokenError } from "../errors/AuthTokenError";
import { destroyCookie } from "nookies";
import { useCan } from "../hooks/useCan";
export function Dashboard() {
  const { user } = useContext(AuthContext);

  // verifica dentro do meu hook se o usuario tem as devidas permissions
  const userCanSeeMetrics = useCan({
    // Verifica se ele tem a permissions de metrics.list
    permissions: ["metrics.list"],

    // verifica se ele tem o cargo de ou editor ou administrator
    roles: ["administrator", 'editor'],
  });

  useEffect(() => {
    api
      .get("/me")
      .then((response) => "")
      .catch((err) => {});
  }, []);

  return (
    <>
      <h1>Dashboard: {user?.email}</h1>

      {/* se ele tem permissions, ele mostra */}
      {userCanSeeMetrics && <div>Métricas</div>}
    </>
  );
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
