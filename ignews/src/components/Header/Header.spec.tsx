import { render } from "@testing-library/react";
import { Header } from "./Header";

// forço uma function que não depende somente do componente,
// simular um resultado expecifico para que o meu teste unitario de certo
jest.mock("next/router", () => {
  // No primeiro parametro é qual é o impoort que vai ser escutado
  // o segundo é o que ele vai fazer
  return {
    // retorn o useRouter do next passando um retorno de um determinado path
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

// crio uma categoria para os testes
describe("Header component", () => {

  // teste unitario para renderizar o component
  it("renders correctly", () => {
    const { getByText } = render(
      // Eu passo o meu component a ser testado, com os parametros necessarios
      <Header/>
    );

    // retorno da minha função de render
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Posts")).toBeInTheDocument();
  });

});
