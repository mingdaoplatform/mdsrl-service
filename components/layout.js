import Navbar from "./navbar";
import Footer from "./footer";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <>
      <main className="flex h-screen">
        <div className="w-[200px] bg-[#53a7e2] flex-none">
          <Sidebar />
        </div>
        <div className="flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
}
