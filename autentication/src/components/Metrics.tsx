import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";


export function Metrics() {
  return (<h1>Metrics</h1>);
}

// Método SSR (O getServerSideProps) é executado pelo lado do server antes de aparecer algo
// O parametro ctx ele passa todas as informações do client para o server (usando req.cookies)
// posso pegar os cookies
export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get("/me");

  return {
    props: {},
  }
}, {
    // aqui eu estou passando quais são os requisitos para acessar a pagina
    permissions: ['metrics.list'],
    roles: ['administrator']
});
