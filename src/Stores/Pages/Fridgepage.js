import React from "react";
import Navbar from "../Components/Navbar";
import Fridge from "../Components/Fridge";
import { fridgeData } from "../data/fridge";

const Fridgepage = () => {
  return (
    <>
      <Navbar />
      <Fridge limit={fridgeData.length} />
    </>
  );
};

export default Fridgepage;
