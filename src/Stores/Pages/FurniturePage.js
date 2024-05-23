import React from "react";
import Navbar from "../Components/Navbar";
import Furniture from "../Components/Furniture";
import { furnitureData } from "../data/furniture";

const FurniturePage = () => {
  return (
    <>
      <Navbar />
      <Furniture limit={furnitureData.length} />
    </>
  );
};

export default FurniturePage;
