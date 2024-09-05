import "node_modules/react-modal-video/css/modal-video.css";
import "../../styles/index.css";
import { Inter } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import ScrollToTop from "@/components/Common/ScrollToTop";
import { ProvidersTheme } from "../Providers/ThemeProvider";
import Footer from "@/components/Common/Footer";
import HeaderRender from "@/components/Common/Header/HeaderRender";
import StoreProvider from "../Providers/storeProvider";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`bg-[#FEFAE0] dark:bg-black ${inter.className}`}>
        <StoreProvider>
        <ProvidersTheme>
          <NextIntlClientProvider messages={messages}>
            <HeaderRender />
            <main>{children}</main>
            
            <ScrollToTop />
            <Footer />
          </NextIntlClientProvider>
        </ProvidersTheme>
        </StoreProvider>
      </body>
    </html>
  );
}
