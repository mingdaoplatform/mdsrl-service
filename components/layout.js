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
      <div className="flex h-[-webkit-fill-available] max-h-[-webkit-fill-available] overflow-hidden">
        <div className="overflow-x-hidden overflow-y-scroll sidebar max-md:hidden">
          <Sidebar />
        </div>
        <div className="flex-1 flex-col max-md:max-h-[calc(100vh-60px)]">
          <Navbar />
          <div className="bg-gray-100 max-md:max-h-[calc(100svh-60px-105px)] max-md:h-[calc(100svh-70px-105px)] md:max-h-[calc(100svh-105px)] md:h-[calc(100svh-105px)]">
            {children}
          </div>
        </div>
        <div className="absolute bottom-0 md:hidden">
          <Foobar />
        </div>
      </div>
    </>
  );
}
