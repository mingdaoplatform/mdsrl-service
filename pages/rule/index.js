export default function Rule() {
  return (
    <>
      <main className="overflow-y-scroll h-[calc(100vh-105px)] noscroll select-none max-md:h-[calc(100svh-70px-105px)]">
        <div className="flex flex-column p-3 ">
          <div className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-full text-dark-purple">
            <h1 className="text-2xl font-semibold font-bolf mt-2">發文規則</h1>
            <div className="text-xl font-bolf mt-7">
              <p className="mt-2">1.禁止任何垃圾內容</p>
              <p className="mt-2">2.禁止任何複製文內容</p>
              <p className="mt-2">3.禁止任何霸凌或騷擾內容</p>
              <p className="mt-2">4.禁止任何含有自殘或過度暴力的內容</p>
              <p className="mt-2">5.禁止任何色情、裸露...等性暗示內容</p>
              <p className="mt-2">
                6.禁止任何針對個人或群體的仇恨言論、威脅或直接性攻擊的內容
              </p>
              <p className="mt-2">
                7.任何的問題文章、留言內容刪除後一樣會有發文紀錄留在資料庫內
              </p>
              <p className="mt-2">
                8.問題、文章發文者擁有對所有留言進行審核刪除的權利，不包含編輯內容
              </p>
              <p className="mt-2">
                9.網站管理者擁有對所有問題、貼文、留言內容進行審核刪除的權利，不包含編輯內容
              </p>
              <p className="mt-10 text-red-500">
                請注意！以上內容網站管理者擁有完全編輯權。
              </p>
              <p className="mt-4 text-black">最後編輯：2023年1月3日 22時22分</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
