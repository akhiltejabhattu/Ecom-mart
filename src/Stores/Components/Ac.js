import React from 'react'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'
const Ac = (props) => {
    const visibleData=acData.slice(0,props.limit)
    return (
      <div>
          <h2 className='cat-title'>Ac</h2>
      <div className='product-con'>
          {
              visibleData.map((prod)=>{
                  return (
                    <div className="img-con" key={prod.id}>
                      <Link to={`/ac/${prod.id}`}>
                        <img
                          className="prod-img"
                          src={prod.image}
                          alt={prod.model}
                        />
                      </Link>
                      <p className="prod-txt">
                        {prod.model}-{prod.company}
                      </p>
                      <p className="prod-txt">Price-{prod.price}</p>
                    </div>
                  );
              })
          }
      </div></div>
    )
}

export default Ac