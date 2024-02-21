import { useState, useEffect } from "react";
import "./scroll.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPerc, setScrollPerc] = useState(0);

  async function fetchData(inUrl) {
    try {
      setLoading(true);
      const response = await fetch(inUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setErrorMsg(e.message);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPerc() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPerc((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPerc);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (errorMsg) {
    return <div>Error! {errorMsg}</div>;
  }

  if (loading) {
    return <div>Loading! Please wait...</div>;
  }

  console.log(data, scrollPerc);
  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPerc}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
