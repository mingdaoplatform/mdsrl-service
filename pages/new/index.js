import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function New() {
  return (
    <>
      <main className="p-4 flex items-center flex-col select-none overflow-auto h-[calc(100vh-105px)]">
        <div className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-9/10 lg:w-full h-auto">
          <h1 className="text-dark-purple text-2xl font-bold">新增問題</h1>
          <div className="mt-4 flex gap-1 flex-col lg:flex-row">
            <div className="flex flex-col w-full lg:w-1/6">
              <label className="mb-1" htmlFor="category">
                部別
              </label>
              <select
                className="rounded-lg border-neutral-500 border-2"
                id="category"
              >
                <option value="0">無分類</option>
                <option value="1">國中部</option>
                <option value="2">高中部</option>
                <option value="3">技高部</option>
                <option value="4">國際部</option>
              </select>
            </div>
            <div className="flex flex-col w-full lg:w-1/6">
              <label className="mb-1" htmlFor="subject">
                科目
              </label>
              <select
                className="rounded-lg border-neutral-500 border-2"
                id="subject"
              >
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
                <option value="27">其他</option>
              </select>
            </div>
            <div className="flex flex-col w-full lg:w-4/6">
              <label className="mb-1" htmlFor="title">
                標題
              </label>
              <input
                type="text"
                className="rounded-lg border-neutral-500 border-2"
                id="title"
              ></input>
            </div>
          </div>
          <div className="mt-4 h-[]">
            <CKEditor
              editor={ClassicEditor}
              data=""
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                // console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                // console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                // console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                // console.log("Focus.", editor);
              }}
              id="content"
            />
          </div>
        </div>
      </main>
    </>
  );
}
