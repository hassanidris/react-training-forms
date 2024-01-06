import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("fitching products in ", category);
    setProducts(["Clothing", "Household"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
