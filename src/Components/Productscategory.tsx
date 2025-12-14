
import Categories from "./Categories";
import Products from "./Products"
import { useState , useEffect} from "react";
function Productscategory() {
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
    <Categories/>
    <div className="flex flex-col text-center w-full mt-20">
      <h2 className="text-xl text-indigo-500 tracking-widest font-medium title-font mb-1">Products</h2>
      <h1 className="sm:text-3xl text-3xl font-medium title-font text-gray-900">All Products</h1>
    </div>
    <Products products={products}/>
    </>
  )
}

export default Productscategory