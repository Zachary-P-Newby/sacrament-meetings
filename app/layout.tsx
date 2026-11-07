import type { Metadata } from "next";
import { Barlow} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Sacrament Meeting Planner",
  description: "Sacrament Meeting Planner app",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-barlow">
        <Header/>
        <div className="flex flex-col flex-1 items-center justify-start bg-background font-barlow dark:bg-background">
          {children}
        </div>
        
        <Footer/>
        </body>
    </html>
  );
}
