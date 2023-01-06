import Head from "next/head";
import Navbar from "./navbar";
import Foobar from "./foobar";
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
      <div className="flex h-[-webkit-fill-available] max-h-[-webkit-fill-available] w-[-webkit-fill-available] max-w-[-webkit-fill-available] max-md:hidden">
        <div className="sidebar overflow-y-scroll overflow-x-hidden">
          <Sidebar />
        </div>
        <div className="flex-1 flex-col">
          <Navbar />
          <div className="bg-gray-100">{children}</div>
        </div>
      </div>
      <div className="flex h-[-webkit-fill-available] max-h-[-webkit-fill-available] md:hidden overflow-hidden">
        <div className="flex-1 flex-col">
          <div className="max-h-[calc(100vh-60px)]">
            <Navbar />
            <div className="bg-gray-100 max-h-[calc(100svh-60px-105px)] h-[calc(100svh-60px-105px)]">
              {children}
            </div>
          </div>
          <div className="absolute bottom-0">
            <Foobar />
          </div>
        </div>
      </div>
    </>
  );
}
