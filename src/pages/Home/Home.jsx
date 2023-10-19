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
      <div>
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {brands.map((brand) => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Home;
