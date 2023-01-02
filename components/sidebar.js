import { useState } from "react";
import { useRouter } from "next/router";
import { FaFire } from "react-icons/fa";
import { MdNoteAdd } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { AiFillCalculator } from "react-icons/ai";
import {
  BsArrowLeftShort,
  BsFillLayersFill,
  BsFillGearFill,
  BsFillPersonFill,
  BsFillTrophyFill,
} from "react-icons/bs";

export default function SideBar() {
  const router = useRouter();
  const [open, setOpen] = useState(true);
  return (
    <div
      className={
        "sidebar bg-dark-purple max-h-full p-5 pt-8 relative duration-300 max-md:w-20 select-none overflow-y-auto overflow-x-hidden " +
        (open ? "w-[245px]" : "w-20")
      }
    >
      <BsArrowLeftShort
        className={
          "z-50 bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer max-md:hidden " +
          (!open && "rotate-180")
        }
        onClick={() => setOpen(!open)}
      />
      <div
        className="inline-flex mt-0.5 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <BsFillLayersFill
          className={
            "text-white text-4xl cursor-pointer block float-left mr-2 duration-500 " +
            (open && "rotate-[360deg]")
          }
        />
        <h1
          className={
            "text-white origin-left text-2xl duration-300 max-md:scale-0 font-semibold cursor-pointer " +
            (!open && "scale-0")
          }
        >
          NGOM
        </h1>
      </div>
      <ul className="pt-12">
        <li
          className={
            "text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 " +
            (router.pathname.startsWith("/new") && "bg-light-white")
          }
          onClick={() => router.push("/new")}
        >
          <span className="text-2xl block float-left">
            <MdNoteAdd />
          </span>
          <span
            className={
              "text-base font-medium flex-1 duration-200 truncate " +
              (!open && "hidden ")
            }
          >
            建立問題
          </span>
        </li>
        <li
          className={
            "text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 " +
            (router.pathname === "/" && "bg-light-white")
          }
          onClick={() => router.push("/")}
        >
          <span className="text-2xl block float-left">
            <IoIosTime />
          </span>
          <span
            className={
              "text-base font-medium flex-1 duration-200 truncate " +
              (!open && "hidden")
            }
          >
            最新討論
          </span>
        </li>
        <li
          className={
            "text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 " +
            (router.pathname.startsWith("/hot") && "bg-light-white")
          }
          onClick={() => router.push("/hot")}
        >
          <span className="text-2xl block float-left">
            <FaFire />
          </span>
          <span
            className={
              "text-base font-medium flex-1 duration-200 truncate " +
              (!open && "hidden")
            }
          >
            熱門討論
          </span>
        </li>
        <li
          className={
            "text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 " +
            (router.pathname.startsWith("/subject") && "bg-light-white")
          }
          onClick={() => router.push("/subject")}
        >
          <span className="text-2xl block float-left">
            <AiFillCalculator />
          </span>
          <span
            className={
              "text-base font-medium flex-1 duration-200 truncate " +
              (!open && "hidden")
            }
          >
            科目選擇
            <span className="bg-blue-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-2">
              Beta
            </span>
          </span>
        </li>
        <li
          className={
            "text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 " +
            (router.pathname.startsWith("/rank") && "bg-light-white")
          }
          onClick={() => router.push("/rank")}
        >
          <span className="text-2xl block float-left">
            <BsFillTrophyFill />
          </span>
          <span
            className={
              "text-base font-medium flex-1 duration-200 truncate " +
              (!open && "hidden")
            }
          >
            新排行榜
            <span className="bg-blue-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-2">
              Beta
            </span>
          </span>
        </li>
        <li
          className={
            "text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-12 " +
            (router.pathname.startsWith("/setting") && "bg-light-white")
          }
          onClick={() => router.push("/setting")}
        >
          <span className="text-2xl block float-left">
            <BsFillGearFill />
          </span>
          <span
            className={
              "text-base font-medium flex-1 duration-200 truncate " +
              (!open && "hidden")
            }
          >
            變更設定
          </span>
        </li>
        <li
          className={
            "text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 " +
            (router.pathname.startsWith("/account") && "bg-light-white")
          }
          onClick={() => router.push("/account")}
        >
          <span className="text-2xl block float-left">
            <BsFillPersonFill />
          </span>
          <span
            className={
              "text-base font-medium flex-1 duration-200 truncate " +
              (!open && "hidden")
            }
          >
            我的帳號
          </span>
        </li>
      </ul>
    </div>
  );
}
