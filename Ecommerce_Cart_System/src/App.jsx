import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartBox from './components/CartBox';

export default function App(){

	const [cart, setCart] = useState([]);

	const products = [
		{
			id: 1,
			name: "Laptop 1",
			price: 56000,
			image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
		},
		{
			id: 2,
			name: "Laptop 2",
			price: 66000,
			image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
		},
		{
			id: 3,
			name: "Laptop 3",
			price: 59000,
			image: "https://images.unsplash.com/photo-1491472253230-a044054ca35f"
		},
		{
			id: 4,
			name: "Laptop 4",
			price: 96000,
			image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
		}
	];
	function addToCart(product){
		setCart([...cart, product]);
	}
	function removeFromCart(product){
		setCart(cart.filter(item => item.id !== product.id));
	}
	return (
		<div style={{padding:20}}>
			<Header cartCount={cart.length} />
			<ProductList
				products={products}
				addToCart={addToCart}
			/>
			<h2>CART SYSTEM</h2>
			<CartBox
				cart={cart}
				removeFromCart={removeFromCart}
			/>
		</div>
	);
}