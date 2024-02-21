import { useRef } from "react";

export default function ScrollToSection() {
  const ref = useRef(null);
  const data = [
    {
      label: "First",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second",
      style: {
        width: "100%",
        height: "600px",
        background: "gray",
      },
    },
    {
      label: "Third",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth",
      style: {
        width: "100%",
        height: "600px",
        background: "powderblue",
      },
    },
  ];

  function handleScrollToSection() {
    let pos = ref.current.getBoundingClientRect().top;
    window.scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <h1>Scroll to a Section</h1>
      <button onClick={handleScrollToSection}>Click to Scroll</button>
      {data.map((dataItem, index) => (
        <div ref={index === 2 ? ref : null} style={dataItem.style}>
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}
