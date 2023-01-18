import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function Account() {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);
  React.useEffect(() => {
    if (session) {
      axios
        .get(`/api/user/${session?.user.email}`, {
          headers: {
            key: process.env.NEXT_PUBLIC_POSTKEY,
          },
        })
        .then((response) => {
          if (response.data !== undefined) {
            setUser(response.data.data);
          }
        });
    }
  }, []);
  if (session) {
    return (
      <>
        <main className="overflow-y-scroll h-[calc(100vh-105px)] noscroll select-none max-md:h-[calc(100svh-70px-105px)]">
          <div className="flex p-3 flex-column ">
            <div className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-full text-dark-purple">
              <h1 className="mt-2 text-2xl font-semibold font-bolf">
                我的帳號
              </h1>
              <div className="flex w-full h-12 mt-2 bg-red-300 border-white rounded">
                <p className="block m-auto text-lg font-black text-center">
                  我的帳號尚未開放編輯功能
                </p>
              </div>

              <div className="mt-3">
                <div className="w-full h-[300px] bg-cover bg-center rounded bg-no-repeat bg-[url('https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]"></div>
                <div className="flex mt-4 items-center">
                  <Image
                    src={session.user.image}
                    alt="user-avatar"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div className="p-1 flex-col items-start justify-center">
                    <p className="text-xl">{session.user.name}</p>
                    <div className=" text-sky-900/50">{session.user.email}</div>
                  </div>

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
