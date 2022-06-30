import { SignInButton } from "../SignInButton/SignInButton";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export function Header() {

const {asPath} = useRouter()

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/" >
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
          <Link href="/" >
            <a className={asPath === '/' ? styles.active : ''}>Home</a>
          </Link>
          <Link href="/posts" prefetch >
            <a>Posts</a>
          </Link>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
