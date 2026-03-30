import "./globals.css";
import SessionWrap from "./component/SessionWrap/SessionWrap";
import { Toaster } from "react-hot-toast";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <SessionWrap>
        <body className="">
          <Toaster />
          {children}
        </body>
      </SessionWrap>
    </html>
  );
}
