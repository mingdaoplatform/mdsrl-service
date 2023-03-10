import { useRouter } from "next/router";
import Post from "../components/post";
import Swal from "sweetalert2";
import React from "react";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const { error } = router.query;
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    if (error && error === "NotMD") {
      Swal.fire({
        title: "登入失敗",
        text: "您使用的帳號並非明道中學的老師或學生！",
        icon: "error",
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
      });
    }
    axios
      .get(`/api/forum/post`, {
        headers: {
          key: process.env.NEXT_PUBLIC_POSTKEY,
        },
      })
      .then((response) => {
        if (response.data !== undefined) {
          setPosts(response.data.data);
        }
      });
  }, [error]);
  const PostHtml = [];
  if (posts.length === 0) {
    PostHtml.push(
      <h1 className="mt-5 text-3xl text-center" key="No Posts">
        沒有任何討論內容
      </h1>
    );
  } else {
    for (var i = 0; i < posts.length; i++) {
      PostHtml.push(
        <div className="flex p-3 flex-column" key={posts[i].id}>
          <Post
            id={posts[i].id}
            title={posts[i].title}
            content={posts[i].content}
            like={posts[i].like}
            reply={posts[i].reply.length}
            collect={posts[i].collect}
            solved={posts[i].solved}
            key={posts[i].id}
          />
        </div>
      );
    }
  }

  return (
    <>
      <main className="overflow-y-scroll h-[calc(100vh-105px)] noscroll max-md:h-[calc(100svh-70px-105px)]">
        {PostHtml}
        <br />
      </main>
    </>
  );
}
