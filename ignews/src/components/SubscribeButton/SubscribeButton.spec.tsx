import { render, screen, fireEvent } from "@testing-library/react";
import SubscribeButton from "./SubscribeButton";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

// se chamar a importação, ela devolve uma function com os tipos de dados originais da lib
jest.mock("next-auth/react");

jest.mock("next/router");

// crio uma categoria para os testes
describe("SubscribeButton component", () => {
  // teste unitario para renderizar o component
  it("renders correctly", () => {
    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValueOnce([null, false] as any);

    render(
      // Eu passo o meu component a ser testado, com os parametros necessarios
      <SubscribeButton />
    );

    // retorno da minha função de render
    expect(screen.getByText("Subscribe now")).toBeInTheDocument();
  });

  it("redirects user to signIn when not autenticated", () => {
    const signInMocked = jest.mocked(signIn);

    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValueOnce([null, false] as any);

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText("Subscribe now");

    fireEvent.click(subscribeButton);

    expect(signInMocked).toHaveBeenCalled();
  });

  it("redirects to posts when user already subscribed", () => {
    const useRouterMocked = jest.mocked(useRouter);

    const useSessionMocked = jest.mocked(useSession);

    const pushMock = jest.fn();

    useSessionMocked.mockReturnValueOnce([
      {
        user: { name: "John", email: "john@gmail.com" },
        activeSubscription: "fake-subscription",
        expires: "fake",
      },
      false,
    ] as any);

    useRouterMocked.mockReturnValueOnce({
      push: pushMock
    } as any);



    render(<SubscribeButton />);

    const subscribeButton = screen.getByText("Subscribe now");

    fireEvent.click(subscribeButton);

    expect(pushMock).toHaveBeenCalledWith('/posts');
  });
});
