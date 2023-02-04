import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function Account() {
  const genders = {
    None: "未設定",
    Male: "男生",
    Female: "女生",
  };
  const descriptions = {
    None: "未設定",
  };
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  React.useEffect(() => {
    if (status === "authenticated") {
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
  }, [session?.user.email, status]);
  if (status === "loading") {
    return (
      <>
        <main className="overflow-y-scroll h-[calc(100vh-105px)] noscroll select-none max-md:h-[calc(100svh-70px-105px)]">
          <div className="flex p-3 flex-column ">
            <div className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-full text-dark-purple">
              <div className="mt-3">資料讀取中</div>
            </div>
          </div>
        </main>
      </>
    );
  }
  if (status === "authenticated") {
    if (session.user) {
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
                  <div className="flex items-center mt-4">
                    <button
                      className="fixed px-2.5 py-2 text-center text-white rounded-lg right-8 bg-dark-purple disabled:opacity-40 disabled:cursor-no-drop max-md:hidden"
                      disabled
                    >
                      編輯使用者資料
                    </button>
                    <Image
                      src={user ? user?.avatar : "/default-avatar.png"}
                      alt="user-avatar"
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    <div className="flex-col items-start justify-center p-1 ml-2">
                      <p className="overflow-hidden text-xl font-black text-ellipsis">
                        {user?.name}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col mt-4 ml-2 text-xl font-bold">
                    <p className="text-left opacity-60">性別:</p>
                    <div className="p-1 w-full mt-1 bg-gray-300 rounded font-light	">
                      <p className="mt-1 mb-1 ml-1">{genders[user?.gender]}</p>
                    </div>
                  </div>
                  <div className="flex flex-col mt-4 ml-2 text-xl font-bold">
                    <p className="text-left opacity-60">電子郵件:</p>
                    <div className="p-1 w-full mt-1 bg-gray-300 rounded">
                      <p className="mt-1 mb-1 ml-1 mr-1 select-text font-light	">
                        {user?.mail}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col mt-4 ml-2 text-xl font-bold">
                    <p className="text-left opacity-60 p-1">個人介紹:</p>
                    <textarea
                      className="w-full h-24 mt-1 text-xl bg-gray-300 border-none rounded focus:outline-none focus:ring-0 focus:border-none font-light	"
                      defaultValue={descriptions[user?.description]}
                    ></textarea>
                  </div>
                  <div className="flex flex-col items-center mt-4 ml-2 text-xl font-bold">
                    <button
                      onClick={() => signOut()}
                      className="w-20 px-3 py-2 mt-2 text-white rounded bg-dark-purple"
                    >
                      登出
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      );
    } else {
      return (
        <>
          <main className="overflow-y-scroll h-[calc(100vh-105px)] noscroll select-none max-md:h-[calc(100svh-70px-105px)]">
            <div className="flex p-3 flex-column ">
              <div className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-full text-dark-purple">
                <div className="mt-3">資料讀取中</div>
              </div>
            </div>
          </main>
        </>
      );
    }
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
