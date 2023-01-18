import { useSession, signIn, signOut } from "next-auth/react";
import { sendError } from "next/dist/server/api-utils";
import Image from "next/image";

export default function Account() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <main className="overflow-y-scroll h-[calc(100vh-105px)] noscroll select-none max-md:h-[calc(100svh-70px-105px)]">
          <div className="flex p-3 flex-column ">
            <div className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-full text-dark-purple">
              <h1 className="mt-2 text-2xl font-semibold font-bolf">
                我的帳號
              </h1>
              <div className="mt-3">
                <div className="w-full h-20">
                  <img src={session.user.image} className="w-full h-20" />
                </div>
                <div className="flex mt-2">
                  <Image
                    src={session.user.image}
                    alt="user-avatar"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div className="block my-auto ml-5 text-2xl font-black">
                    <p>{session.user.name}</p>
                  </div>
                </div>
                <div className="mt-2">{session.user.email}</div>
                {/* 歡迎回來，{session.user.name} <br />*/}
                {/* <button
                  onClick={() => signOut()}
                  className="px-3 py-1.5 text-white rounded bg-dark-purple mt-2"
                >
                  登出
                </button> */}
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <main className="overflow-y-scroll h-[calc(100vh-105px)] noscroll select-none max-md:h-[calc(100svh-70px-105px)]">
        <div className="flex p-3 flex-column ">
          <div className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-full text-dark-purple">
            <h1 className="mt-2 text-2xl font-semibold font-bolf">我的帳號</h1>
            <div className="mt-3 text-lg font-bolf">
              <p>您尚未登入帳號！</p>
              <button
                onClick={() => signIn("google")}
                className="px-2 py-1.5 text-white rounded bg-dark-purple mt-2"
              >
                登入
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
