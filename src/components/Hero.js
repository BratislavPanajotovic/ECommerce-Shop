import React, { useContext } from "react";
import WomanImg from "../img/woman_hero.png";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";

const Hero = () => {
  const { products } = useContext(ProductContext);

  const mainProduct = products.filter((item) => {
    return item.id === 3;
  });

  return (
    <section className="bg-sky-300 h-[800px] bg-hero bg-no-repeatbg-cover bg-center py-24 ">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
            <Link
              to={`/product/${mainProduct.id}`}
              className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
            >
              {mainProduct.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </Link>
            <div className="hidden lg:block">
              <div>New Trend</div>
            </div>
            <h1 className="text-[70px] leading-[1.1] font-light mb-4">
              AUTUMN SALE STYLISH <br />{" "}
              <span className="font-semibold">MENS</span>
            </h1>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Hero;
