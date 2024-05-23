import React from 'react'
import { booksData } from '../data/books'
import { Link } from 'react-router-dom'

const Books = (props) => {
    const visibleData=booksData.slice(0,props.limit)
    return (
      <div>
          <h2 className='cat-title'>Books</h2>
      <div className='product-con'>
          {
              visibleData.map((prod)=>{
                  return (
                    <div className="img-con" key={prod.id}>
                      <Link to={`/books/${prod.id}`}>
                        <img
                          className="prod-img"
                          src={prod.image}
                          alt={prod.model}
                        />
                      </Link>{" "}
                      <p className="prod-txt">
                        {prod.title}-{prod.author}
                      </p>
                      <p className="prod-txt">Price-{prod.price}</p>
                    </div>
                  );
              })
          }
      </div></div>
    )
}

export default Books