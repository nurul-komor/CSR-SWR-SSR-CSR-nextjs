import React, { useEffect } from "react";

export default function useTest(data, error) {
  if (error) {
    return <h1>Error happened</h1>;
  }
  if (!data) {
    return <h3>Loading</h3>;
  }
}
