
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import {fauna} from '../../../services/fauna';



export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
  }),
],

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
          
            return true
        },
        
}
})