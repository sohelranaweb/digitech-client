import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import Navbar from "../Shared/Navbar/Navbar";

const Products = () => {
  const prodcuts = useLoaderData();

  console.log(prodcuts);
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {prodcuts.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
