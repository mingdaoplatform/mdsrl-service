export default function New() {
  return (
    <>
      <main className="p-4">
        <div className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-full">
          <h1 className="text-dark-purple text-2xl font-bold">新增問題</h1>
          <div className="mt-4 flex gap-1">
            <div className="flex flex-col w-1/6">
              <label className="mb-1">類別</label>
              <select className="rounded-lg border-neutral-500 border-2">
                <option value="0">提問</option>
                <option value="1">其他</option>
              </select>
            </div>
            <div className="flex flex-col w-1/6">
              <label className="mb-1">科目</label>
              <select className="rounded-lg border-neutral-500 border-2">
                <option value="1">綜合</option>
                <option value="2">物理</option>
                <option value="3">化學</option>
                <option value="4">生物</option>
                <option value="5">歷史</option>
                <option value="6">公民</option>
                <option value="7">國文</option>
                <option value="8">地理</option>
                <option value="9">數學A</option>
                <option value="10">數學B</option>
                <option value="11">英文</option>
                <option value="12">學測</option>
                <option value="13">分科測驗</option>
                <option value="14">競賽</option>
                <option value="26">地科</option>
                <option value="27">國寫</option>
              </select>
            </div>
            <div className="flex flex-col w-4/6">
              <label className="mb-1">標題</label>
              <input
                type="text"
                className="rounded-lg border-neutral-500 border-2"
              ></input>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
