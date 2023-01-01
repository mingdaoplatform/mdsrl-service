import { useState } from "react";
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
  const [open, setOpen] = useState(true);
  return (
    <div
      className={
        "bg-dark-purple h-screen p-5 pt-8 relative duration-300 max-md:w-20 " +
        (open ? " w-56" : "w-20")
      }
    >
      <BsArrowLeftShort
        className={
          "bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer max-md:hidden " +
          (!open && "rotate-180")
        }
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex mt-0.5">
        <BsFillLayersFill
          className={
            "text-white text-4xl cursor-pointer block float-left mr-2 duration-500 " +
            (open && "rotate-[360deg]")
          }
        />
        <h1
          className={
            "text-white origin-left text-2xl duration-300 max-md:scale-0 font-semibold " +
            (!open && "scale-0")
          }
        >
          NGOM
        </h1>
      </div>
      <ul className="pt-12">
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
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
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
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
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
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
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
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
          </span>
        </li>
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
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
          </span>
        </li>
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-12">
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
        <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2">
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
