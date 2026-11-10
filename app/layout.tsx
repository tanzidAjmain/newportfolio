
import "./globals.css";
import Head from "next/head";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en">
      <body className="bg-[#D5D5D8] h-dvh overflow-hidden">{children}</body>
    </html>
  );
}
