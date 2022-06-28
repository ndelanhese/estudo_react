import styles from './styles.module.scss';
import { useSession , signIn, signOut} from "next-auth/react";

interface SubscribeButtonProps {
    priceId: string;
}

const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
const { data: session } = useSession()
    function handleSubscribe() {
        if(!session){
            signIn('github')
            return;
        }
        
    }


    return (

        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >

            Subscribe now

        </button>

    );
}
export default SubscribeButton;