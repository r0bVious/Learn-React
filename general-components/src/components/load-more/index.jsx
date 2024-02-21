import "./styles.css";
import { useState, useEffect } from "react";

export default function LoadMore(url) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchItems() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }

      console.log(data);
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    fetchItems();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  });

  if (loading) {
    return <div>Loading! Please wait...</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Items
        </button>
        {disableButton ? <p>You have reached 100 products.</p> : null}
      </div>
    </div>
  );
}
