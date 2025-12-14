import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Products from "./Products"


function Specificcategory() {
    const {name}=useParams()
    const[products,setProducts]=useState([])
     useEffect(()=>{
          const fetchProduct= async ()=>{
            const response = await fetch(`https://fakestoreapi.com/products/category/${name}`);

            const data = await response.json();
            console.log(data);
            setProducts(data);
        
          }
          fetchProduct();
         },[]) 
             if (!products ||products.length === 0) {
    return <div>Product Not Found</div>;
  }
    
  return (
  <>
  <Products products={products}/>
  </>
  )
}

export default Specificcategory