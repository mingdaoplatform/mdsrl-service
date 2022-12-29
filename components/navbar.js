import { BsSearch } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className=" h-[105px] p-5 pt-8 text-black text-2xl shadow-lg flex">
      <div className="flex-1"></div>
      <div class="flex items-center bg-slate-200 rounded-lg ml-5 h-10 flex-auto max-w-[430px] mr-10">
        <BsSearch className="text-black ml-3 text-base align-middle cursor-pointer" />
        <input
          class="outline-none ring-0 border-0 focus:ring-0 bg-transparent h-6 text-base max-w-[400px] w-full flex-auto"
          type="text"
          placeholder="搜尋文章..."
        />
      </div>
    </div>
  );
}
