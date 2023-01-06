import { useRouter } from "next/router";
import { FaFire } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { MdNoteAdd, MdArticle } from "react-icons/md";
import { AiFillCalculator, AiFillFileText } from "react-icons/ai";
import {
  BsArrowLeftShort,
  BsFillLayersFill,
  BsFillGearFill,
  BsFillPersonFill,
  BsFillTrophyFill,
} from "react-icons/bs";

export default function Footer() {
  const router = useRouter();
  return (
    <div className="bg-dark-purple h-[70px] items-center justify-between flex w-[100vw] text-white select-none overflow-auto">
      <div
        className={
          "text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer w-full p-1 hover:bg-light-white rounded-md mt-1 flex-col " +
          (router.pathname.startsWith("/new") && "bg-light-white")
        }
        onClick={() => router.push("/new")}
      >
        <span className="text-2xl block float-left">
          <MdNoteAdd />
        </span>
        <span className={"text-base font-medium flex-1 duration-200 truncate "}>
          建立問題
        </span>
      </div>
      <div
        className={
          "text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer w-full p-1 hover:bg-light-white rounded-md mt-1 flex-col " +
          (router.pathname === "/" && "bg-light-white")
        }
        onClick={() => router.push("/")}
      >
        <span className="text-2xl block float-left">
          <MdArticle />
        </span>
        <span className={"text-base font-medium flex-1 duration-200 truncate "}>
          討論問題
        </span>
      </div>
      <div
        className={
          "text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer w-full p-1 hover:bg-light-white rounded-md mt-1 flex-col " +
          (router.pathname.startsWith("/rule") && "bg-light-white")
        }
        onClick={() => router.push("/rule")}
      >
        <span className="text-2xl block float-left">
          <AiFillFileText />
        </span>
        <span className={"text-base font-medium flex-1 duration-200 truncate"}>
          發文規則
        </span>
      </div>
      <div
        className={
          "text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer w-full p-1 hover:bg-light-white rounded-md mt-1 flex-col " +
          (router.pathname.startsWith("/account") && "bg-light-white")
        }
        onClick={() => router.push("/account")}
      >
        <span className="text-2xl block float-left">
          <BsFillPersonFill />
        </span>
        <span className={"text-base font-medium flex-1 duration-200 truncate"}>
          我的帳號
        </span>
      </div>
    </div>
  );
}
