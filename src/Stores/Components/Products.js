import React from 'react'
import Mobiles from './Mobiles'
import Computers from './Computers'
import Ac from './Ac'
import Books from './Books'
import Fridge from './Fridge'
import Kitchen from './Kitchen'
import Men from './Men'
import Speaker from './Speaker'
import Tv from './Tv'
import Watch from './Watch'
import Women from './Women'
import Furniture from './Furniture'

const Products = () => {
  return (
    <div>
      <Ac limit={5} />
      <Books limit={5} />
      <Computers limit={5} />
      <Fridge limit={5} />
      <Furniture limit={5}/>
      <Kitchen limit={5} />
      <Men limit={5} />
      <Mobiles limit={5} />
      <Speaker limit={5} />
      <Tv limit={5} />
      <Watch limit={5} />
      <Women limit={5} />
    </div>
  )
}

export default Products