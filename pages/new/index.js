// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function New() {
  const editorRef = useRef(null);
  return (
    <>
      <main className="overflow-auto h-[calc(100vh-105px)]">
        <div className="flex flex-column p-3">
          <div className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-full">
            <h1 className="text-dark-purple text-2xl font-bold ml-2">
              新增問題
            </h1>
            <div className="mt-4 flex gap-1 flex-col md:flex-row">
              <div className="flex flex-col w-[25%] max-md:w-[100%]">
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
              <div className="flex flex-col w-[25%] max-md:w-[100%]">
                <label className="mb-1" htmlFor="subject">
                  科目
                </label>
                <select
                  className="rounded-lg border-neutral-500 border-2"
                  id="subject"
                >
                  <option value="0">綜合</option>
                  <option value="1">物理</option>
                  <option value="2">化學</option>
                  <option value="3">生物</option>
                  <option value="4">歷史</option>
                  <option value="5">公民</option>
                  <option value="6">國文</option>
                  <option value="7">地理</option>
                  <option value="8">數學</option>
                  <option value="9">英文</option>
                  <option value="10">學測</option>
                  <option value="11">分科</option>
                  <option value="12">競賽</option>
                  <option value="13">地科</option>
                  <option value="14">國寫</option>
                  <option value="15">其他</option>
                </select>
              </div>
              <div className="flex flex-col w-[50%] max-md:w-[100%]">
                <label className="mb-1" htmlFor="title">
                  標題
                </label>
                <input
                  type="text"
                  className="rounded-lg border-neutral-500 border-2"
                  id="title"
                />
              </div>
            </div>
            <div className="mt-4">
              <Editor
                apiKey={process.env.NEXT_PUBLIC_EDITORKEY}
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue=""
                init={{
                  height: 500,
                  menubar: false,
                  plugins: [
                    "a11ychecker",
                    "advlist",
                    "advcode",
                    "advtable",
                    "autolink",
                    "checklist",
                    "export",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "powerpaste",
                    "fullscreen",
                    "formatpainter",
                    "insertdatetime",
                    "media",
                    "table",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | casechange blocks | bold italic backcolor | " +
                    "alignleft aligncenter alignright alignjustify | " +
                    "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </div>
          </div>
        </div>
      </main>
      {/* <main className="p-4 flex items-center flex-col select-none overflow-auto h-[calc(100vh-105px)] w-[calc(100vh-80px)] max-w-[calc(100vh-80px)]">
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
                <option value="0">綜合</option>
                <option value="1">物理</option>
                <option value="2">化學</option>
                <option value="3">生物</option>
                <option value="4">歷史</option>
                <option value="5">公民</option>
                <option value="6">國文</option>
                <option value="7">地理</option>
                <option value="8">數學</option>
                <option value="9">英文</option>
                <option value="10">學測</option>
                <option value="11">分科</option>
                <option value="12">競賽</option>
                <option value="13">地科</option>
                <option value="14">國寫</option>
                <option value="15">其他</option>
              </select>
            </div>
            <div className="flex flex-col w-4/6">
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
      </main> */}
    </>
  );
}
