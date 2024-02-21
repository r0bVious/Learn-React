import { useState, useRef } from "react";
import useOutsideClick from ".";

export default function UseOnClickOutsideTest() {
  const ref = useRef();
  const [showContent, setShowContent] = useState(false);
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>Content is Being Shown</h1>
          <p>click outside to hide</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}
