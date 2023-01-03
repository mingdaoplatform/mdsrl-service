import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function PostID(req, _) {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = React.useState({});
  React.useEffect(() => {
    axios
      .get(`/api/forum/post/?id=${id}`, {
        headers: {
          key: process.env.NEXT_PUBLIC_POSTKEY,
        },
      })
      .then((response) => {
        if (response.data !== undefined) {
          setPost(response.data.data);
        }
      });
  }, []);
  return (
    <>
      <main>
        <div className="flex flex-column p-3">{post.title}</div>
      </main>
    </>
  );
}
