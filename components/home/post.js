import { FaRegBookmark } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";

export default function Post(params) {
  return (
    <div className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-full">
      <h1 className="text-dark-purple text-2xl font-bold">{params.title}</h1>
      <p className="mt-3">{params.content}</p>
      <div className="flex items-center justify-between mt-3 gap-2 pl-2">
        <div className="flex">
          <AiOutlineHeart className="text-xl" />
          <FiMessageCircle className="text-xl ml-2" />
          <FaRegBookmark className="text-xl ml-2" />
        </div>
        <p
          className={
            "pt-1 pr-2 pb-1 pl-2 text-sm rounded font-semibold " +
            (params.solved
              ? "bg-cyan-600/50 text-cyan-900 "
              : "bg-amber-600/50 text-amber-900")
          }
        >
          {!params.solved ? "未解決" : "已解決"}
        </p>
      </div>
    </div>
  );
}
