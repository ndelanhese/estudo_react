import styles from "./styles.module.scss";
import { useSession, signIn } from "next-auth/react";
import { api } from "../../services/api";
import { getStipeJs } from "../../services/stripe-js";
import { useRouter } from "../../../node_modules/next/router";


const SubscribeButton = () => {
  const { data: session } = useSession();
  const router = useRouter()

  async function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }

    if (session.activeSubscription) {
        router.push('/posts');
        return;
    }
    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;

      const stripe = await getStipeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
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
};
export default SubscribeButton;
