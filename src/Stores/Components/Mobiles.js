import React from "react";
import { mobileData } from "../data/mobiles";
import { Link } from "react-router-dom";

const Mobiles = (props) => {
  if (props.limit === undefined) props.limit = mobileData.length;
  const visibleData = mobileData.slice(0, props.limit);

  return (
    <div>
      <h2 className="cat-title">Mobiles</h2>
      <div className="product-con">
        {visibleData.map((prod) => {
          return (
            <div className="img-con" key={prod.id}>
              <Link to={`/mobiles/${prod.id}`}>
                <img className="prod-img" src={prod.image} alt={prod.model} />
              </Link>
              <p className="prod-txt">
                {prod.model}-{prod.company}
              </p>
              <p className="prod-txt">Price-{prod.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mobiles;
