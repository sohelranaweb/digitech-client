import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Navbar from "../Shared/Navbar/Navbar";
import Brand from "./Brand";

const Home = () => {
  const [brands, setBrands] = useState([]);
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
    </div>
  );
};

export default Home;
