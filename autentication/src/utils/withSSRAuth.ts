import { destroyCookie, parseCookies } from "nookies";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { AuthTokenError } from "../errors/AuthTokenError";
import decode from "jwt-decode";
import { validadeUserPermissions } from "./validadeUserPermissions";

type withSSRAuthOptions = {
  permissions?: string[];
  roles?: string[];
};

export function withSSRAuth<P>(
  fn: GetServerSideProps<P>,
  options?: withSSRAuthOptions
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    // eu uso o conversor para pegar todos os meus cookies da requisição do meu contexto
    const cookies = parseCookies(ctx);

    const token = cookies["autentication.token"];

    // Se não tenho um cookie, eu já redireciono o meu client direto para o login!
    if (!token) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    if (options) {
      const user = decode<{ permissions: string[]; roles: string[] }>(token);
      const { permissions, roles } = options;

      const userHasValidPermissions = validadeUserPermissions({
        user,
        permissions,
        roles
      });

      if (!userHasValidPermissions) {
        return {
          redirect: {
            // aqui caso ele não tenha permission eu rediciono ele pra pagina
            // que eu sei que todo mundo tem acesso (main por exemplo)
            destination: "/dashboard",
            permanent: false,
          },
        };
      }
    }

    try {
      return await fn(ctx);
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, "autentication.token");
        destroyCookie(ctx, "autentication.refreshToken");

        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }
    }
  };
}
