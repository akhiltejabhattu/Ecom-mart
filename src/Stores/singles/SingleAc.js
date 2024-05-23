import React from "react";
import { useParams } from "react-router-dom";
import { acData } from "../data/ac";
import Navbar from "../Components/Navbar";

const SingleAc = () => {
  const { id } = useParams();
  const prod = acData.find((a) => a.id === id);
  return(
    <>
      <Navbar />
      <div className="con1">
        <div className="subcon1">
          <img src={prod.image} alt={prod.model} />
        </div>
        <div className="subcon2">
          <h1>{prod.model}</h1>
          <h2>{prod.company}</h2>
          <h1>{prod.price}</h1>
          <h6>{prod.description}</h6>
          <div className="btn-con">
            <button className="cartbtn">Add To Cart</button>
            <button className="buybtn">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleAc;
