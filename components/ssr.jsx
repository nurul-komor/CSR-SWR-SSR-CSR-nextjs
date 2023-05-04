import React from "react";
import SWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
function SSR({ data, error }) {
  if (error) {
    return <h1>Error Occurred</h1>;
  }
  //   console.log(data);
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Server side rendering</h1>
      <ul>
        {data &&
          data.map((post) => {
            return <li>{post.title}</li>;
          })}
      </ul>
    </>
  );
}

export const getServerSideProps = async () => {
  //   console.log("ok");
  //   const { data, error } = SWR(
  //     "https://jsonplaceholder.typicode.com/posts/",
  //     fetcher
  //   );
  console.log("ok");
  return {
    props: {
      data: "ok",
      error: error,
    },
  };
};

export default SSR;
