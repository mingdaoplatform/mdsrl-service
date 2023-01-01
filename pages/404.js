import { useRouter } from "next/router";

export default function FourZeroFour() {
  const router = useRouter();
  return (
    <div class="flex items-center justify-center h-[calc(100vh-105px)] bg-fixed bg-cover bg-bottom text-center select-none">
      <h1 className="text-9xl text-red-500 flex flex-col">
        404
        <br />
        <p className="text-lg text-center">看來你跑到了一個不存在的地方</p>
        <p className="text-lg text-center">
          請點擊下方按鈕或是頁面左上角回到首頁
        </p>
        <button
          className=" bg-gray-400 text-lg rounded-lg py-3 w-[100px] text-center m-auto text-white mt-3"
          onClick={() => router.push("/")}
        >
          回到首頁
        </button>
      </h1>
    </div>
  );
}
