import Head from "next/head";
import Providers from "./Provider";
import { NavBar } from "../NavBar";
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Solo's To Do</title>
        <meta name="description" content="A simple to do app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </main>
    </>
  );
};
