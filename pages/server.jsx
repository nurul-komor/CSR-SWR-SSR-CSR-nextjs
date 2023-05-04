import React from "react";
import SWR from "swr";
// const fetcher = (...args) => fetch(...args).then((res) => res.json());
function Server({ data, error }) {
  if (!data[0]) {
    return <h1>No data found</h1>;
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
          data.map((post, index) => {
            return <li key={index}>{post.title}</li>;
          })}
      </ul>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/").then(
    (res) => res.json()
  );
  return {
    props: {
      data,
      //   error,
    },
  };
};

export default Server;
