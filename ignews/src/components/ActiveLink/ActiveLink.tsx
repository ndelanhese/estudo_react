import { ReactElement, cloneElement } from "react";
import Link, { LinkProps } from "../../../node_modules/next/link";
import { useRouter } from "next/router";
interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({
  children,
  activeClassName,
  ...props
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  const className = asPath === props.href ? activeClassName : '';

  return <Link {...props}>{cloneElement(children, { className })}</Link>;
}
