
import { fauna } from './../../../services/fauna';
import { query as q } from 'faunadb';
import { stripe } from '../../../services/stripe';
import console from 'console';
export async function saveSubscription(
    subscriptionId: string,
    customerId: string,
    createAction = false,
) {

    // Buscar o usuario no banco do fauna com o ID {customerId}
    // Salvar os dados da subscription do usuario no banco do faunadb

    const userRef = await fauna.query(
        q.Select(
            "ref",
            q.Get(
                q.Match(
                    q.Index('user_by_customer_id'),
                    customerId
                )
            )
        )
    )

    const stripe = require('stripe')(process.env.STIPE_API_KEY);

    const subscription = await stripe.subscriptions.retrieve(subscriptionId);


    const subscriptionData = {
        id: subscription.id,
        userId: userRef,
        status: subscription.status,
        price_id: subscription.items.data[0].price.id,
    }


    if (createAction) {
        await fauna.query(
            q.Create(
                q.Collection('subscriptions'),
                { data: subscriptionData }
            )
        )
    } else {
        await fauna.query(
            q.Replace(
                q.Select(
                    "ref",
                    q.Get(
                        q.Match(
                            q.Index('subscription_by_id'),
                            subscriptionId
                        )
                    )
                ), { data: subscriptionData }
            )
        )
    }
}