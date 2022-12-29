import { useState } from "react";
import { BsArrowLeftShort, BsFillLayersFill, BsSearch } from "react-icons/bs";

export default function SideBar() {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={
        "bg-dark-purple h-screen p-5 pt-8 relative duration-300 max-md:w-20 " +
        (open ? "w-72" : "w-20")
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
      {/* <div className="flex items-center rounded-md bg-light-white mt-6 px-4 py-2">
        <BsSearch className="text-white text-lg block float-left cursor-pointer mr-2" />
        <input
          type={"search"}
          placeholder="搜尋..."
          className="text-base bg-transparent w-full text-white focus:outline-none outline-none border-none focus:border-none"
        />
      </div> */}
    </div>
  );
}
