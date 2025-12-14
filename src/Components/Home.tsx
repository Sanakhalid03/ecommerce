import { useEffect, useState } from 'react'
import Hero from './Hero'
import Products from './Products'
import Categories from './Categories'
function Home() {
      const [products,setProducts]=useState([])
 useEffect(()=>{
  const fetchProducts= async ()=>{
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setProducts(data);

  }
  fetchProducts();
 },[])
  return (
 <>
   <Hero/>
    <div className="flex flex-col text-center w-full mt-20">
      <h2 className="text-xl text-indigo-500 tracking-widest font-medium title-font mb-1">Products</h2>
      <h1 className="sm:text-3xl text-3xl font-medium title-font text-gray-900">Most Popular Products</h1>
    </div>
    {
      products.length >0 ?
      <Products products={products}/>
      :
      <div>Loading...</div>
    }
        <Categories />
 </>
  )
}

export default Home