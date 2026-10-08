import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "RideShare",
  description: "Lista e udhëtimeve për AAB",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}
