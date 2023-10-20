import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import MyCartCard from "./MyCartCard";
import { useState } from "react";

const MyCart = () => {
  const products = useLoaderData();
  const [cartProduct, setCartProduct] = useState(products);

  return (
    <div className="lg:px-0 px-3">
      <Navbar></Navbar>
      <div className="grid grid-cols-1 gap-8">
        {cartProduct.map((product) => (
          <MyCartCard
            key={product._id}
            product={product}
            cartProduct={cartProduct}
            setCartProduct={setCartProduct}
          ></MyCartCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
