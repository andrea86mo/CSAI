import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "ADMIN" | "AGENT" | "VIEWER";
      tenantId: string;
    } & DefaultSession["user"];
  }

  interface User {
    role: "ADMIN" | "AGENT" | "VIEWER";
    tenantId: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "ADMIN" | "AGENT" | "VIEWER";
    tenantId?: string;
  }
}
