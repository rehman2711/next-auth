import "./globals.css";
import SessionWrap from "./component/SessionWrap/SessionWrap";
import { Toaster } from "react-hot-toast";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeLayoutComponent } from "@/components/theme-layout-component";
import { Galindo } from "next/font/google";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const galindo = Galindo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-galindo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable, galindo.variable)}
    >
      <body>
        <SessionWrap>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ThemeLayoutComponent />

            {children}
          </ThemeProvider>
          <Toaster />
        </SessionWrap>
      </body>
    </html>
  );
}
