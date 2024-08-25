import "node_modules/react-modal-video/css/modal-video.css";
import "../../styles/index.css";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

// Dynamically import the ClientWrapper component
const ClientWrapper = dynamic(() => import("./ClientWrapper"), { ssr: false });

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale}>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <ClientWrapper locale={locale} dir={dir}>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}