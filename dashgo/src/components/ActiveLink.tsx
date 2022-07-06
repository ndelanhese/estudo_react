import Link, { LinkProps } from "next/link";
import {useRouter} from "next/router";
import { cloneElement, ReactElement } from "react";


// ReactElement é um elemento react e não somente propriedades de um elemento

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExactHref?: boolean;
}

// children neste caso é meu elemento e rest, são todas as propriedades de um next/link
export function ActiveLink({ children, shouldMatchExactHref = false, ...rest }: ActiveLinkProps) {
  // pega a minha URL (Rota) ativa no momento
const {asPath} = useRouter()
  
    let isActive = false;

    // faço a verificação se a url é exatamente igual
    if(shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)){
        isActive = true;
    }

    // faço a verificação se a url tem o começo igual
    if(!shouldMatchExactHref && (asPath.startsWith(String(rest.href))
     || asPath.startsWith(String(rest.as)))){
        isActive = true;
    }

  //clone element serve para eu clonar ele e modificar certos atributos

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.400" : "gray.50",
      })}
    </Link>
  );
}
