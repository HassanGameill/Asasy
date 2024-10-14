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
import WhatsUpLink from "@/components/Common/StableLinks/WhatsUpLink/WhatsUpLink";
import MobileHeader from "@/components/Common/MobileHeader/MobileHeader";

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
  const dir = locale === "ar" ? "rtl" : "ltr";


  return (
    <html lang={locale}>
      <body className={`bg-[#FEFAE0] dark:bg-black ${inter.className}`}>
        <StoreProvider>
        <ProvidersTheme>
          <NextIntlClientProvider messages={messages}>
            <HeaderRender />
            <MobileHeader />
            <main className={`${locale === "ar" ? "__rtl_lang" : ""}`}>{children}</main>
            <ScrollToTop />
            <WhatsUpLink />
            <Footer />
          </NextIntlClientProvider>
        </ProvidersTheme>
        </StoreProvider>
      </body>
    </html>
  );
}
