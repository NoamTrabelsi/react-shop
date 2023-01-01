import Products from './Products/Products'
import './Section.css'
const Section = ({ data }) => {
  return (
    <div>
      <section className="products">
        {data.map((prod) => (
          <Products
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