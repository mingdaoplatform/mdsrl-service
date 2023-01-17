import md5 from "js-md5";
import NextAuth from "next-auth";
import UserDB from "../../../models/user";
import dbConnect from "../../../utils/dbConnect";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        if (profile.hd !== "ms.mingdao.edu.tw") {
          return "/?error=NotMD";
        } else {
          await dbConnect();
          let user = await UserDB.findOne({ mail: profile.email });
          if (!user) {
            const NewUser = new UserDB({
              id: md5(Date.now().toString()),
              name: profile.name,
              mail: profile.email,
              banner: profile.picture,
              avatar: profile.picture,
              gender: "None",
              twofa: false,
              description: "None",
              like: 0,
              warn: 0,
              beta: false,
              role: [],
              delete: false,
              premium: 0,
              badage: [],
              disable: false,
              post_count: 0,
              reply_count: 0,
              last_update: Date.now(),
              created_time: Date.now(),
              last_post_time: "None",
              last_reply_time: "None",
              first_time_name: profile.name,
            });
            await NewUser.save();
          }
          return true;
        }
      }
      return true;
    },
  },
});
