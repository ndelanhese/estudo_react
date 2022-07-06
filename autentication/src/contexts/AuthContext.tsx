import { createContext, ReactNode } from "react";

// Cria uma tipagem do que é necessário para criar um SignIn
type SignInCredentials = {
  email: string;
  password: string;
};

//tipagem do meu context
type AuthContextData = {
  //Promise<void> é uma chamada para API, no entanto sem retorno
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
};

// Tipagem do meu AuthProvider, declarando que a children é do react
type AuthProviderProps = {
  children: ReactNode;
};

// Informa que ao criar um contexto eu preciso usar o meu type AuthContextData
export const AuthContext = createContext({} as AuthContextData);

// Export uma function com as children
export function AuthProvider({ children }: AuthProviderProps) {
  // cria uma constante para guardar a information de que se está autenticado
  const isAuthenticated = false;

  // Funtion de criar um signIn, já tipado para manter o editor inteligente
  //(Para retornar uma promise ela tem que ser async)
  async function signIn({ email, password }: SignInCredentials) {
    console.log({ email, password });
  }

  return (
    // retorna o context provider chamdo a minha function
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
