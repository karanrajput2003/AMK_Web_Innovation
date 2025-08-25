import React from "react";
import { useQuery } from "@tanstack/react-query";

function Dummy() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['dummy'],
    queryFn: () => {
      return fetch('https://dummyjson.com/products')
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => data);
    },
  });

  if (isLoading) {
    return <div>Loading......</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <ul>{data.products.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul>
    </div>
  );
}

export default Dummy;
