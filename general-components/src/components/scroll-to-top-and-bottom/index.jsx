import { useRef, useState } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (pending) {
    return <h1>Loading! Wait...</h1>;
  }
  if (error) {
    return <h1>Error! {error}</h1>;
  }

  return (
    <div>
      {console.log(data)}
      <h1>Scroll to Top / Bottom</h1>
      <h3>This is the top of the page</h3>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
      <h3 ref={bottomRef}>This is the bottom of the page</h3>
    </div>
  );
}
