import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>NGOM</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex-col">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
}
