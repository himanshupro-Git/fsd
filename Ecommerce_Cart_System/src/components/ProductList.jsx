import ProductCard from "./ProductCard";

export default function ProductList({ products, addToCart }) {

	return(
		<div style={{
			display:"flex"
		}}>

			{products.map(product => (
				<ProductCard
					key={product.id}
					product={product}
					addToCart={addToCart}
				/>
			))}

		</div>
	);
}