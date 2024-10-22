import { ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  // Todo: Check if user is authenticated and if user is an admin before rendering the page

  return <>{children}</>;
}
