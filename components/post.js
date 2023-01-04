import parse from "html-react-parser";
import { useRouter } from "next/router";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";

export default function Post(params) {
  const router = useRouter();
  return (
    <div
      className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-full noscroll select-none cursor-pointer"
      onClick={() => {
        router.push(`/post/${params.id}`);
      }}
    >
      <h1 className="text-dark-purple text-2xl font-bold">{params.title}</h1>
      <div className="mt-3">{parse(params.content)}</div>
      <div className="flex items-center justify-between mt-4 text-black">
        <div className="flex rounded-lg">
          <span className="p-2 rounded-lg transition-colors flex items-center opacity-30">
            <AiOutlineHeart className="text-xl" />
            <p className="ml-1">{params.like}</p>
          </span>
          <span
            className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer transition-colors flex items-center"
            onClick={() => {
              router.push(`/post/${params.id}`);
            }}
          >
            <FiMessageCircle className="text-xl" />
            <p className="ml-1">{params.reply}</p>
          </span>
          <span className="p-2 hover:bg-light-white rounded-lg transition-colors flex items-center opacity-30">
            <BsBookmark className="text-xl" />
            <p className="ml-1">{params.collect}</p>
          </span>
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
