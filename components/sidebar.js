import { useState } from "react";
import { useRouter } from "next/router";
import { FaFire } from "react-icons/fa";
import { MdNoteAdd } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { AiFillCalculator, AiFillFileText } from "react-icons/ai";
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
        "bg-dark-purple min-h-[100vh] max-h-[100vh] p-5 pt-8 relative duration-300 max-md:w-20 select-none " +
        (open ? "w-[245px]" : "w-20")
      }
    >
      <BsArrowLeftShort
        className={
          "z-50 bg-white text-dark-purple text-3xl rounded-full fixed top-9 border border-dark-purple cursor-pointer max-md:hidden duration-300 " +
          (!open ? "rotate-180 left-16" : " left-[230px]")
        }
        onClick={() => setOpen(!open)}
      />
      <div
        className="inline-flex mt-0.5 cursor-pointer "
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
      <div className="pt-12">
        <ul>
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
              ????????????
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
              ????????????
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
              ????????????
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
              ????????????
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
              ????????????
              <span className="bg-blue-600 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-2">
                Beta
              </span>
            </span>
          </li>
          <li
            className={
              "text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2 " +
              (router.pathname.startsWith("/rule") && "bg-light-white")
            }
            onClick={() => router.push("/rule")}
          >
            <span className="text-2xl block float-left">
              <AiFillFileText />
            </span>
            <span
              className={
                "text-base font-medium flex-1 duration-200 truncate " +
                (!open && "hidden")
              }
            >
              ????????????
            </span>
          </li>
          {/* <li
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
              ????????????
            </span>
          </li> */}
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
              ????????????
              <span className="bg-gray-500 text-white text-sm font-medium mr-2 px-3 py-0.5 rounded ml-2">
                Dev
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
