import { loginUser } from "@/app/actions/auth/loginUser";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import dbConnect, { dbCollection } from "./dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await loginUser(credentials);
        if (user) {
          return user;
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      //   console.log({ user, account, profile, email, credentials });
      if (account) {
        const { providerAccountId, provider } = account;
        const { email, image, name } = user;
        const userCollection = dbConnect(dbCollection.users);
        const isExisted = await userCollection.findOne({ providerAccountId });
        if (!isExisted) {
          const payload = {
            providerAccountId,
            provider,
            email,
            image,
            name,
          };
          await userCollection.insertOne(payload);
        }
      }
      return true;
    },
  },
};
