import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";

function Categories() {
  const [categories, setCategories] = useState<string[] | null>(null);
  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/categories`
      );
      const data: string[] = await response.json();
      console.log(data);
      setCategories(data || []);
    };
    fetchCategory();
  }, []);
  if (!categories || categories.length === 0) {
    return <div>Product Not Found</div>;
  }
  return (
    <>
      <FeatureCard cards={categories} />
    </>
  );
}

export default Categories;
