import Products from './Products/Products'
import './Section.css'
import MyContext from "../../MyContext"
import { useContext } from 'react';

const Section = () => {
  const { data } = useContext(MyContext);
  return (
    <div>
      <section className="products">
        {data.map((prod) => (
          <Products
            key={prod.id}
            id={prod.id}
            price={prod.price}
            title={prod.title}
            imageUrl={prod.image}
          />
        ))}
      </section >
    </div>
  )
}
export default Section