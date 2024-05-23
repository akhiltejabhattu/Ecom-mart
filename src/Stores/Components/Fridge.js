import React from "react";
import { fridgeData } from "../data/fridge";
import { Link } from "react-router-dom";
const Fridge = (props) => {
  const visibleData = fridgeData.slice(0, props.limit);
  return (
    <div>
      <h2 className="cat-title">Fridge</h2>
      <div className="product-con">
        {visibleData.map((prod) => {
          return (
            <div className="img-con" key={prod.id}>
              <Link to={`/fridge/${prod.id}`}>
                <img className="prod-img" src={prod.image} alt={prod.model} />
              </Link>{" "}
              <p className="prod-txt">
                {prod.model}-{prod.brand}
              </p>
              <p className="prod-txt">Price-{prod.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fridge;
