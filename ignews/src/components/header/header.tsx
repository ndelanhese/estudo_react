import { SignInButton } from '../SignInButton/SignInButton';
import styles from './styles.module.scss';

export function Header() {
    return (

        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/assets/images/logo.svg" alt="logo ignews"></img>
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>

                <SignInButton />
            </div>
        </header>

    );
}