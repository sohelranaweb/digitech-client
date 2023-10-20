import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import Navbar from "../Shared/Navbar/Navbar";

const Products = () => {
  const prodcuts = useLoaderData();

  console.log(prodcuts);
  return (
    <div className="lg:px-0 px-3">
      <Navbar></Navbar>
      <div className="mt-10">
        <div className="carousel w-full lg:h-[600px] h-[400px]">
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/qpnrdDD/adv3-2-200.webp"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/wp4hhz5/adv2-2-200.webp"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/WtFXFg5/adv1-1-200.webp"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-20 lg:px-0 px-3">
        {prodcuts.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
