import Swal from "sweetalert2";
import React, { useRef } from "react";
import { useRouter } from "next/router";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function New() {
  const router = useRouter();
  const [value, setValue] = React.useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const endpoint = "/api/forum/post";
    const urlencoded = new URLSearchParams();

    if (!value) return alert("你必須輸入內容！");

    urlencoded.append("title", event.target.title.value);
    urlencoded.append("content", value);
    urlencoded.append("category", event.target.category.value);
    urlencoded.append("subject", event.target.subject.value);

    const options = {
      method: "POST",
      headers: {
        key: process.env.NEXT_PUBLIC_POSTKEY,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlencoded,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();

    Swal.fire({
      title: "成功送出新的問題！",
      icon: "success",
      confirmButtonText: "確認",
      allowEscapeKey: false,
      allowOutsideClick: false,
      confirmButtonColor: "#081A51",
      customClass: {
        container: "select-none",
      },
      focusConfirm: false,
      background: "#fff url(/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/nyan-cat.gif")
        left top
        no-repeat
      `,
    }).then((resault) => {
      router.push("/");
    });
  };
  return (
    <>
      <main className="overflow-auto h-[calc(100vh-105px)] select-none max-md:h-[calc(100svh-70px-105px)]">
        <div className="flex flex-column p-3">
          <div className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-full">
            <form onSubmit={handleSubmit}>
              <h1 className="text-dark-purple text-2xl font-bold">新增問題</h1>
              <div className="mt-4 flex gap-1 flex-col md:flex-row">
                <div className="flex flex-col w-[25%] max-md:w-[100%]">
                  <label className="mb-1" htmlFor="category">
                    部別
                  </label>
                  <select
                    className="rounded-lg border-neutral-500 border-2"
                    id="category"
                    name="category"
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
                    name="subject"
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
                    name="title"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <ReactQuill theme="snow" value={value} onChange={setValue} />
              </div>
              <div>
                <p className="text-base opacity-60 mt-2">
                  <a className="text-base ml-2">※</a>
                  <a className="ml-2 text-sm">發送問題即表示您同意</a>
                  <a
                    className="text-sm text-red-500 ml-1 hover:cursor-pointer"
                    onClick={() => {
                      router.push("/rule");
                    }}
                  >
                    發文規則
                  </a>
                </p>
              </div>
              <div className="mt-4 text-center m">
                <button
                  className="text-center py-3 px-4 bg-dark-purple rounded-lg text-white"
                  type="submit"
                >
                  送出問題
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
