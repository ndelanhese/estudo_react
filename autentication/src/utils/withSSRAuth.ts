import { destroyCookie, parseCookies } from "nookies";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";

export function withSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    // eu uso o conversor para pegar todos os meus cookies da requisição do meu contexto
    const cookies = parseCookies(ctx);

    // Se não tenho um cookie, eu já redireciono o meu client direto para o login!
    if (!cookies["autentication.token"]) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    try {
      return await fn(ctx);
    } catch (err) {
      destroyCookie(ctx, "autentication.token");
      destroyCookie(ctx, "autentication.refreshToken");

      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  };
}
