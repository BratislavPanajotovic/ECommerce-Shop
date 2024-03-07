import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  const { products } = useContext(ProductContext);
  console.log(products);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "mens's clothing" ||
      item.category === "women's clothing"
    );
  });

  return (
    <div>
      <section>
        <div className="container mx-auto">
          <div>
            {filteredProducts.map((product) => {
              console.log(filteredProducts);
              return <div key={product.id}> {product.title} </div>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
