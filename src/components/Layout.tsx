import React, { ReactNode } from "react";
interface Props {
  children?: ReactNode;
  title?: string;
}
import Head from "next/head";
import Nav from "./Nav";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>{children}</main>
    </>
  );
}
