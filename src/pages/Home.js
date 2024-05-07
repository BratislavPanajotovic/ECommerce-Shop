import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { products } = useContext(ProductContext);

  const product = products.find((item) => {
    return item.id === 3;
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }
  const { title, description, image } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 mob-L:h-[650px] mob-M:h-[650px] mob-S:h-[700px] lg:h-[700px] 4K:h-[1520px] 1K:h-[1020px] h-screen flex items-center md:my-10">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row items-center   ">
          <div className="flex flex-1 justify-center items-center mob-S:py-12 md:py-2 md:text-left mb-8 lg:mb-0">
            <Link
              to={`/product/3`}
              className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
            >
              <img className="max-w-[200px]  lg:max-w-sm" src={image} alt="" />
            </Link>
          </div>
          <div className="flex-1 text-center lg:text-left md:p-12">
            {" "}
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>{" "}
            <p className="mb-8">{description}</p>
            <Link to={"allProducts"}>
              <button className="bg-neutral-900 py-4 px-8 text-white">
                SHOW ALL PRODUCTS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
