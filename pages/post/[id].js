import axios from "axios";
import Swal from "sweetalert2";
import React, { useRef } from "react";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import { BsBookmark } from "react-icons/bs";
import { Editor } from "@tinymce/tinymce-react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";
import { timestamp2string } from "../../utils/Timestamp2String";

export default function PostID() {
  const router = useRouter();
  const editorRef = useRef(null);
  const [post, setPost] = React.useState({});
  const [reply, setReply] = React.useState(null);
  const [replyCount, setReplyCount] = React.useState(0);
  const [replies, setReplies] = React.useState([]);
  const [content, setContent] = React.useState(null);
  React.useEffect(() => {
    axios
      .get(`/api/forum/post/${window.location.href.split("/").pop()}`, {
        headers: {
          key: process.env.NEXT_PUBLIC_POSTKEY,
        },
      })
      .then((response) => {
        if (response.data !== undefined) {
          setPost(response.data.data);
          setReply(response.data.data.reply.length);
          setReplies(response.data.data.reply);
          setContent(parse(response.data.data.content.toString()));
        }
      });
  }, [replyCount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const endpoint = `/api/forum/reply/${post.id}`;
    const urlencoded = new URLSearchParams();

    if (!event.target.content.value) return alert("你必須輸入內容！");

    urlencoded.append("content", event.target.content.value);

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
    setReplyCount(replyCount + 1);
    Swal.fire({
      title: "成功送出新的留言！",
      icon: "success",
      confirmButtonText: "確認",
      allowEscapeKey: false,
      allowOutsideClick: false,
      confirmButtonColor: "#081A51",
      customClass: {
        container: "select-none",
      },
      focusConfirm: false,
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/nyan-cat.gif")
        left top
        no-repeat
      `,
    });
  };

  const ReplyHtml = [];
  if (replies.length === 0) {
    ReplyHtml.push(
      <h1 className="text-center mt-5 text-3xl mb-4" key="No Reply">
        沒有任何留言
      </h1>
    );
  } else {
    for (var i = 0; i < replies.length; i++) {
      ReplyHtml.push(
        <div
          className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-full text-dark-purple/40"
          key={replies[i].id}
        >
          <div className="ml-1 text-dark-purple/40">
            <h1 className="text-lg">{replies[i].author}</h1>
            <div className="text-sm flex mb-4">
              <p className="text-dark-purple/75">{replies[i].floor}</p>
              <p>｜</p>
              <p>
                最後編輯時間:{timestamp2string(Number(replies[i].last_update))}
              </p>
            </div>
            <hr />
            <div className="mt-4 mb-ㄉ text-dark-purple">
              {parse(replies[i].content)}
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <>
      <main className="overflow-y-scroll h-[calc(100vh-105px)] noscroll ">
        <div className="flex-column p-3 ">
          <div className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-full text-dark-purple/40">
            <div className="ml-1">
              <h1 className="text-lg">{post.author}</h1>
              <div className="text-sm flex">
                <p className="text-dark-purple/75">1F</p>
                <p>｜</p>
                <p>
                  最後編輯時間:
                  {" " + timestamp2string(Number(post.last_update))}
                </p>
              </div>
            </div>
            <div className="mt-4 ml-1">
              <h1 className="text-3xl text-dark-purple">{post.title}</h1>
            </div>
            <div className="mt-3 ml-1 text-dark-purple">{content}</div>
            <div className="flex mt-2 rounded-lg text-dark-purple">
              <span className="p-1 rounded-lg transition-colors flex items-center opacity-30">
                <AiOutlineHeart className="text-xl" />
                <p className="ml-1">{post.like}</p>
              </span>
              <span className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer transition-colors flex items-center">
                <FiMessageCircle className="text-xl" />
                <p className="ml-1">{reply}</p>
              </span>
              <span className="p-2 hover:bg-light-white rounded-lg transition-colors flex items-center opacity-30">
                <BsBookmark className="text-xl" />
                <p className="ml-1">{post.collect}</p>
              </span>
            </div>
          </div>
          <div className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-full text-dark-purple">
            <form onSubmit={handleSubmit}>
              <h1 className="text-2xl ml-1 mb-4">留言</h1>
              <Editor
                disabled={post.solved}
                id="content"
                textareaName="content"
                apiKey={process.env.NEXT_PUBLIC_EDITORKEY}
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue={
                  post.solved ? "<h1>問題已解決不再接受留言！</h1>" : ""
                }
                init={{
                  selector: "textarea",
                  toolbar_mode: "scrolling",
                  height: 155,
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
                    "undo redo | casechange blocks sizes | bold italic underline Strikethrough forecolor backcolor | blockquote code | superscript subscript" + //styles
                    "bullist numlist checklist outdent indent | table help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
              <div>
                <p className="text-base opacity-60">
                  <a className="text-base ml-2">※</a>
                  <a className="ml-2 text-sm">發送留言即表示您同意</a>
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
                  className="text-center py-3 px-4 bg-dark-purple rounded-lg text-white hover:cursor-pointer disabled:hover:cursor-default disabled:bg-dark-purple/30"
                  type="submit"
                  disabled={post.solved}
                >
                  送出留言
                </button>
              </div>
            </form>
          </div>
          <div className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-full text-dark-purple">
            <h1 className="text-2xl ml-1 mb-4">所有留言</h1>
            {ReplyHtml}
          </div>
        </div>
      </main>
    </>
  );
}
