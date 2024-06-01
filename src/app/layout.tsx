import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "~/trpc/react";

import { cookieToInitialState } from 'wagmi'

import { config } from '../config'
import Web3ModalProvider from "~/context";

export const metadata = {
  title: "memeblocks",
  description: "creating for fun",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>
              <TRPCReactProvider>
                <Web3ModalProvider>
                  {children}
                </Web3ModalProvider>
              </TRPCReactProvider>
        </body>
      </html>
  );
}
