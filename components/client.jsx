import React, { useEffect, useState } from "react";
import Link from "next/link";
export default function ClientComponent() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
      //   console.clear();
      //   console.log(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Client side rendering</h1>
      <ul>
        {posts &&
          posts.map((post, index) => {
            return (
              <li key={index}>
                <Link href={"client/" + post.id}>{post.title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
