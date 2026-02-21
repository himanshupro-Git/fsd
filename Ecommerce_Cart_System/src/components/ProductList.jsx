import ProductCard from "./ProductCard";
export default function ProductList({ products, addToCart, removeFromCart }) {

	return(
		<div>
			{products.map(product => (
				<ProductCard
					key={product.id}
					product={product}
					addToCart={addToCart}
					removeFromCart={removeFromCart}
				/>
			))}
		</div>
	);
}