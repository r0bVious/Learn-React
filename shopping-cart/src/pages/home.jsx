import { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/header/product-tile";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts(inURL) {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const receivedData = await response.json();
      console.log(receivedData);
      if (receivedData?.length) {
        setLoading(false);
        setProducts(receivedData);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products?.length
            ? products.map((productItem) => (
                <ProductTile product={productItem} />
              ))
            : null}
        </div>
      )}
    </div>
  );
}
