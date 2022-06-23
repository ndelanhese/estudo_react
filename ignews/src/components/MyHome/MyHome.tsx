import styles from './styles.module.scss';

export default function MyHome() {
    return (
        <main>
            <section>
                <span>
                    👏 Hey, welcome
                </span>
                <h1>
                    News about the
                    <span>
                        React
                    </span>
                    world.
                </h1>
                <p>Get access to all the publications <br />
                    <span>
                        for $9.90 month
                    </span>
                </p>
            </section>
            <img src='/assets/images/avatar.svg' alt='Girl Codding' />
        </main>
    );
}