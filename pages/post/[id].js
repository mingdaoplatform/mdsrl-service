import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function PostID() {
  const router = useRouter();
  const [post, setPost] = React.useState({});
  const { id } = router.query;
  React.useEffect(() => {
    axios
      .get(`/api/forum/post/${id}`, {
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
        <div className="flex flex-column p-3"></div>
      </main>
    </>
  );
}
