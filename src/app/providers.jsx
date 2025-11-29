"use client";

import { UserProvider } from "@/context/user.context";

export function Providers({ children }) {
  return <UserProvider>{children}</UserProvider>;
}
