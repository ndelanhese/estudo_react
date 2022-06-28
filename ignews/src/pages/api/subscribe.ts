import { stripe } from './../../services/stripe';
import { NextApiRequest, NextApiResponse } from "../../../node_modules/next/dist/shared/lib/utils";

export default async (req: NextApiRequest, res: NextApiResponse){
    if(req.method === "POST"){
        const checkoutSessions = await stripe
}else{
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
}
}