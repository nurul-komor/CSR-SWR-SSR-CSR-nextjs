import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import useTest from "@/hooks/useTest";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Post() {
  const router = useRouter();

  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts/" + router.query.id,
    fetcher
  );
  if (error) {
    return <h1>Error happened</h1>;
  }
  if (!data) {
    return <h3>Loading</h3>;
  }
  const result = useTest(data, error);

  const clickHandler = () => {
    router.push("/client");
  };
  return (
    <>
      {data && data != null ? (
        <>
          <h1>Title:{data.title}</h1>
          <p>Description: {data.body}</p>
        </>
      ) : (
        <result.type>{result.props.children}</result.type>
      )}
      <button onClick={clickHandler}>All posts</button>
    </>
  );
}
