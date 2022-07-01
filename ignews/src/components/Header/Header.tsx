import { SignInButton } from "../SignInButton/SignInButton";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ActiveLink } from "../ActiveLink/ActiveLink";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a>
            <Image
              src="/assets/images/logo.svg"
              alt="logo ignews"
              width={100}
              height={100}
            />
          </a>
        </Link>
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
