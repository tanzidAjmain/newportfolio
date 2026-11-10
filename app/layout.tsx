
import "./globals.css";



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en">
      <body className="bg-[#D5D5D8] h-screen">{children}</body>
    </html>
  );
}
