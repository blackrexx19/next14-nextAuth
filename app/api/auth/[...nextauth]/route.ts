import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";

const hendler = NextAuth(authOptions);

export {hendler as GET, hendler as POST}