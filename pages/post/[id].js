import React from "react";
import axios from "axios";

export default function PostID() {
  const [post, setPost] = React.useState({});
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
