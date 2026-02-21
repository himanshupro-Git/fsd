import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';

export default function App(){

	const [cart, setCart] = useState([]);
  const [totalAmt, setAmt] = useState(0);

	const products = [
		{
			id: 1,
			name: "Laptop",
			price: 56000,
			image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
		},
		{
			id: 2,
			name: "Laptop",
			price: 66000,
			image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
		},
		{
			id: 3,
			name: "Laptop",
			price: 59000,
			image: "https://images.unsplash.com/photo-1491472253230-a044054ca35f"
		},
		{
			id: 4,
			name: "Laptop",
			price: 96000,
			image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
		}
	];

	function addToCart(product){
		setCart([...cart, product]);
    setAmt(totalAmt+product.price);
	}

	function removeFromCart(product){
		setCart(cart.filter(item => item.id !== product.id));
    setAmt(totalAmt - product.price)
	}

  function addAmount(){
    
  }

	return (
		<div>
			<Header cartCount={cart.length} />

			<ProductList
				products={products}
				addToCart={addToCart}
				removeFromCart={removeFromCart}
        
			/>
      <h2>Total Amount: {totalAmt}</h2>
		</div>
	);
}