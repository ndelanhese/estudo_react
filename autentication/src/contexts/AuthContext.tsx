import  Router from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { setCookie, parseCookies, destroyCookie } from "nookies";
// Cria uma tipagem do que é necessário para criar um SignIn
type SignInCredentials = {
  email: string;
  password: string;
};

//tipagem do meu context
type AuthContextData = {
  //Promise<void> é uma chamada para API, no entanto sem retorno
  signIn(credentials: SignInCredentials): Promise<void>;
  user: User;
  isAuthenticated: boolean;
};

// Tipagem do meu AuthProvider, declarando que a children é do react
type AuthProviderProps = {
  children: ReactNode;
};

// Tipagem do meu User (Estado), passando o que eu posso receber neste campo
type User = {
  email: string;
  permissions: string[];
  roles: string[];
};

export function signOut(){
  destroyCookie(undefined, 'autentication.token')
  destroyCookie(undefined, 'autentication.refreshToken')
  
 Router.push('/')
}


// Informa que ao criar um contexto eu preciso usar o meu type AuthContextData
export const AuthContext = createContext({} as AuthContextData);

// Export uma function com as children
export function AuthProvider({ children }: AuthProviderProps) {
  // cria um estado para armazenar os dados do usuario
  const [user, setUser] = useState<User>();



  // Realiza a ação sempre que a pagina é carregada (useEffectt)
  useEffect(() => {
    // crio uma constante que pega o retorno do metodo parseCookies, que busca todos
    // os cookies salvos do site
    // faço a desestruturação buscando o nome do token e renomeio ele para somente token
    const { "autentication.token": token } = parseCookies();

    // facço a verificação se o token existe
    if (token) {
      // busco na minha api de autenticação dentro da rota me, e pego os dados retornados
      //passando a resposta para uma arrow function
      api.get("/me").then((response) => {
        // pegando os dados da resposta e passando para uma constante
        const { email, permissions, roles } = response.data;

        // estou colocando as respostas dentro do meu estado
        setUser({ email, permissions, roles });
      }).catch(()=> {
        signOut();
      })
    }
  }, []);

  // cria uma constante para guardar a information de que se está autenticado verificando
  // se o estado está verdadeiro (preenchido) ou falso (vazio)
  const isAuthenticated = !!user;



  // Funtion de criar um signIn, já tipado para manter o editor inteligente
  //(Para retornar uma promise ela tem que ser async)
  async function signIn({ email, password }: SignInCredentials) {
    // Crio uma constante que ao chamar o metodo signIn e passar as infirmações
    // Ele chama a minha api de autenticação utilizando um post no metodo de sessão dela
    // passando as minhas informações e devolvendo para dentro da const response os dados
    //Muito impoortante *Ao fazer requisições para API, usar Try catch*

    try {
      const response = await api.post("sessions", {
        email,
        password,
      });

      // pego as informações retornadas pela api
      const { token, refreshToken, permissions, roles } = response.data;

      // função da lib nookies para salvar os cookies
      setCookie(undefined, "autentication.token", token, {
        // validade do cookie em storage
        maxAge: 60 * 60 * 24 * 30, // 30 days
        // quais locais do meu app vão poder acessar o cookie (/) é todos
        path: "/",
        sameSite: "none",
      });
      setCookie(undefined, "autentication.refreshToken", refreshToken, {
        // validade do cookie em storage
        maxAge: 60 * 60 * 24 * 30, // 30 days
        // quais locais do meu app vão poder acessar o cookie (/) é todos
        path: "/",
        sameSite: "none",
      });

      // seto dentro do estado as informações do usuario retornadas pela api
      setUser({
        email,
        permissions,
        roles,
      });

      // Estou atualizando a minha header da api enviando o token quando ele está autenticado
      // antes disso ela fica com o token Undefined
      api.defaults.headers['Authorization'] = `Bearer ${token}`

      // Redireciono se está tudo autorizado para dentro da pagina dashboard
      Router.push('/dashboard')
      
    } catch (err) {
      console.log(err);
    }
  }

  return (
    // retorna o context provider chamdo a minha function
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}
