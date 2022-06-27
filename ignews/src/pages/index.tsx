import Head from '../../node_modules/next/head'
import Start from '../components/Start/Start';
import { GetStaticProps } from 'next';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <Start amountE={product.amount} priceId={product.priceId} />

    </>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const price = await stripe.prices.retrieve('price_1LDtauA4qC8zWv81ZFRfd2CZ', {
    apiKey: process.env.STIPE_API_KEY,
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),

  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }

}