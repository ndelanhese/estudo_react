import { GetServerSideProps } from "next";
import { FormEvent, useContext, useState } from "react";
import { AuthContext, buttonsignIn } from "../contexts/AuthContext";
import styles from "../styles/Home.module.scss";

import { withSSRGuest } from "../utils/withSSRGuest";

export default function Home() {
  //Estado de um atributo do react
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useContext(AuthContext);

  // função que pega os dados do submit do form
  // (Como o AuthContext é Promise, a function tem que ser async)
  async function handleSubmit(event: FormEvent) {
    // event: FormEvent Informa para o typeScript o que eu estou recebendo

    // Evita o reload ao clicar no botão
    event.preventDefault();
    const data = {
      email,
      password,
    };

    // chamo meu metodo do AuthContext passando minhas informações do input
    await signIn(data);

    buttonsignIn();
  }

  return (
    // OnSubmit é quando o form é disparado o submit, neste caso chama a minha function
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="email"
        //Atribuo o valor do meu Input com o valor do meu atributo react
        value={email}
        // arrow function que passa o event do input para o metodo o setEmail
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        //Atribuo o valor do meu Input com o valor do meu atributo react
        value={password}
        // arrow function que passa o event do input para o metodo o setPassword
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" >Submit</button>
    </form>
  );
}

// Método SSR (O getServerSideProps) é executado pelo lado do server antes de aparecer algo
// O parametro ctx ele passa todas as informações do client para o server (usando req.cookies)
// posso pegar os cookies
export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
