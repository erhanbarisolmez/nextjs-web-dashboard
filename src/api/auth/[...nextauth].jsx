import NextAuth from "next-auth/next";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  cookies: {
    pkceCodeVerifier: {
      name: "next-auth.pkce.code_verifier",
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: true
      },
    },
  },
  callbacks: {
    session: async({ session }) => {
      session.customValue = new Date().toISOString();
      return Promise.resolve(session);
    },
  },
}
export default NextAuth(authOptions)

//https://www.youtube.com/watch?app=desktop&v=Deyt6dJAjbE