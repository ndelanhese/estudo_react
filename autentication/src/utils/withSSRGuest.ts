import { parseCookies } from "nookies";
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";

export function withSSRGuest<P>(fn: GetServerSideProps<P>){
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    // eu uso o conversor para pegar todos os meus cookies da requisição do meu contexto
    const cookies = parseCookies(ctx);

    // Se eu tenho um cookie, eu já redireciono o meu client direto para a dashboard, logado!
    if (cookies["autentication.token"]) {
      return {
        redirect: {
          destination: "/dashboard",
          permanent: false,
        },
      };
    }

    return await fn(ctx);
  };
}
