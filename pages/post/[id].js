import axios from "axios";
import React, { useRef } from "react";
import parse from "html-react-parser";
import { BsBookmark } from "react-icons/bs";
import { Editor } from "@tinymce/tinymce-react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";

export default function PostID() {
  const editorRef = useRef(null);
  const [post, setPost] = React.useState({});
  const [reply, setReply] = React.useState(null);
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
          setContent(parse(response.data.data.content.toString()));
        }
      });
  }, []);
  return (
    <>
      <main className="overflow-y-scroll h-[calc(100vh-105px)] noscroll select-none">
        <div className="flex-column p-3 ">
          <div className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-full text-dark-purple/40">
            <div className="ml-1">
              <h1 className="text-lg">{post.author}</h1>
              <div className="text-sm flex">
                <p className="text-dark-purple/75">1F</p>
                <p>｜</p>
                <p>最後編輯時間:{post.last_update}</p>
              </div>
            </div>
            <div className="mt-4 ml-1">
              <h1 className="text-3xl text-dark-purple">{post.title}</h1>
            </div>
            <div className="mt-3 ml-1">{content}</div>
            <div className="flex rounded-lg ml-1">
              <span className="p-2 rounded-lg transition-colors flex items-center opacity-30">
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
            <h1 className="text-2xl ml-1 mb-4">留言</h1>
            <Editor
              id="content"
              textareaName="content"
              apiKey={process.env.NEXT_PUBLIC_EDITORKEY}
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue=""
              init={{
                selector: "textarea",
                toolbar_mode: "scrolling",
                height: 150,
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
          </div>
          <div className="mt-2 p-5 shadow-[0_0px_40px_-15px_rgba(0,0,0,0.3)] rounded-lg w-full text-dark-purple">
            <h1 className="text-2xl ml-1 mb-4">所有留言</h1>
          </div>
        </div>
      </main>
    </>
  );
}
