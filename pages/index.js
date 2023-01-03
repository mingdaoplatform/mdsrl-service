import Post from "../components/post";
import React from "react";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
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
  });
  const PostHtml = [];
  if (posts.length === 0) {
    PostHtml.push(
      <h1 className="text-center mt-5 text-3xl" key="No Posts">
        沒有任何討論內容
      </h1>
    );
  } else {
    for (var i = 0; i < posts.length; i++) {
      PostHtml.push(
        <div className="flex flex-column p-3" key={posts[i].id}>
          <Post
            id={posts[i].id}
            title={posts[i].title}
            content={posts[i].content}
            solved={posts[i].solved}
            key={posts[i].id}
          />
        </div>
      );
    }
  }

  return (
    <>
      <main className="overflow-y-scroll h-[calc(100vh-105px)] noscroll">
        {PostHtml}
        <br />
      </main>
    </>
  );
}
