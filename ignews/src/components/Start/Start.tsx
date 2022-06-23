import SubscribeButton from '../SubscribeButton/SubscribeButton';
import styles from './styles.module.scss';

interface HomeProps {
    priceId: string;
    amountE: number;
}
const MyHome = ({ amountE, priceId }: HomeProps) => {
    return (

        <main className={styles.contentContainer}>
            <section className={styles.hero}>
                <span>
                    👏 Hey, welcome
                </span>
                <h1>
                    News about the <span> React </span> world.
                </h1>
                <p>Get access to all the publications <br />
                    <span>
                        for {amountE} month
                    </span>
                </p>
                <SubscribeButton priceId={priceId} />
            </section>
            <img src='/assets/images/avatar.svg' alt='Girl Codding' />
        </main>


    );
}

export default MyHome;