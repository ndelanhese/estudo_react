import { render, screen } from "@testing-library/react";
import { SignInButton } from "./SignInButton";
import { useSession } from "next-auth/react";

// se chamar a importação, ela devolve uma function com os tipos de dados originais da lib
jest.mock("next-auth/react");

// crio uma categoria para os testes
describe("SignInButton component", () => {
  // teste unitario para renderizar o component
  it("renders correctly when use is not autenticated", () => {
    
    // faz um retorno para a mock
    const useSessionMocked = jest.mocked(useSession);
// faz um retorno unico para a primeira vez que o metodo for chamado
    useSessionMocked.mockReturnValueOnce([null, false]);

    render(
      // Eu passo o meu component a ser testado, com os parametros necessarios
      <SignInButton />
    );

    // retorno da minha função de render
    expect(screen.getByText("Sing in with GitHub")).toBeInTheDocument();
  });

  it("renders correctly when use is autenticated", () => {
    
    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValueOnce([
      { user: { name: "John", email: "john@gmail.com" }, expires: "fake" },
      false
    ]);

    render(
      // Eu passo o meu component a ser testado, com os parametros necessarios
      <SignInButton />
    );

    // retorno da minha função de render
    expect(screen.getByText("Sing in with GitHub")).toBeInTheDocument();
  });
});
