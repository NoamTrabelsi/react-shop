import './App.css';
import Nav from './components/Nav/Nav';
import Section from './components/Section/Section';
import { useEffect, useState } from 'react';
import Cart from './components/Section/Cart/Cart';
import MyContext from "./MyContext"

function App() {

  //creat useState for all the Products and filter Prodacts
  const [filterProdacts, setfilterProdact] = useState([]);
  const [allProducts, setAllProducts] = useState([])
  const [allCartProducts, setAllCartProducts] = useState([])

  //get prodacts information from API
  const getProducts = async () => {
    try {
      const arrOfProdacts = await fetch("https://fakestoreapi.com/products");
      const arrOfProdactsData = await arrOfProdacts.json();
      setfilterProdact(arrOfProdactsData);
      setAllProducts(arrOfProdactsData);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => { //get the product list
    getProducts()
  }, [])

  //filter all the Products by categories in the nav bar
  const categories = allProducts.map((item) => item.category).filter((value, index, array) => array.indexOf(value) === index);
  const funcFilter = (e) => {
    if (e.target.value === 'All Item') {
      setfilterProdact(allProducts);
    } else {
      setfilterProdact(allProducts.filter((value) => value.category === e.target.value));
    }
  }

  const addToCart = (newProd) => {
    const existProductInCart = allCartProducts.find(p => p.id === newProd.id)

    if(!existProductInCart){
      setAllCartProducts([...allCartProducts, newProd]);
    } else{
      const cartCopy = [...allCartProducts]
      const prodIndex = cartCopy.findIndex(p => p.id === newProd.id)
      console.log(prodIndex)
      cartCopy[prodIndex].count += newProd.count
      setAllCartProducts(cartCopy)
    }
  }
  return (
    <MyContext.Provider value={{ data: filterProdacts,addToCart, categories, funcFilter, cart: allCartProducts }}>
      <div className="App">
        <Nav/>
        <Cart />
        <Section />
      </div>
    </MyContext.Provider>
  );
}
export default App;
