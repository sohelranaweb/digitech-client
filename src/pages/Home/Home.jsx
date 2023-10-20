import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Navbar from "../Shared/Navbar/Navbar";
import Brand from "./Brand";
import LatestProductCard from "./LatestProductCard";
import CustomerReview from "./CustomerReview";
import Footer from "./Footer";

const Home = () => {
  const [brands, setBrands] = useState([]);
  const [latesPd, setLatestPd] = useState([]);
  useEffect(() => {
    fetch("/latestProduct.json")
      .then((res) => res.json())
      .then((data) => setLatestPd(data));
  }, []);
  useEffect(() => {
    fetch("/brand.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div>
      <div className="my-8">
        <Navbar></Navbar>
      </div>
      <div className="mb-20">
        <Banner></Banner>
      </div>
      <div>
        <h1 className="text-center text-3xl font-semibold mb-4">
          All <span className="text-[#2e6ed5]">Brands</span>
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {brands.map((brand) => (
            <Brand key={brand.id} brand={brand}></Brand>
          ))}
        </div>
      </div>
      <div className="mt-24 mb-8">
        <h1 className="text-center text-3xl font-medium mb-2">
          Latest <span className="text-[#2e6ed5]">Products</span>
        </h1>
        <p className="text-center text-lg">
          Unleash the power of renowned brands known for quality, performance,
          <br />
          and style. From household names to emerging tech stars, we've <br />
          handpicked the best in the business. Discover the latest innovations{" "}
          <br />
          and timeless classics, all in one place
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
          {latesPd.map((product) => (
            <LatestProductCard
              key={product.id}
              product={product}
            ></LatestProductCard>
          ))}
        </div>
      </div>
      <div className="mt-24 mb-8">
        <h1 className="text-center text-3xl font-medium mb-2">
          What Our <span className="text-[#2e6ed5]">Customers Say</span>
        </h1>
        <p className="text-center text-lg">
          Discover firsthand insights and opinions from our valued customers who
          have <br /> experienced our products and services.
        </p>
        <div className="mt-4">
          <CustomerReview></CustomerReview>
        </div>
      </div>
    </div>
  );
};

export default Home;
