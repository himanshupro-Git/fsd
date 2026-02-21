export default function ProductCard({ product, addToCart, removeFromCart }){

	return(
		<div>
			<img src={product.image} alt={product.name} width="200" />
			<h4>{product.name}</h4>
			<p>{product.price}</p>
			<button onClick={() => addToCart(product)} style={{backgroundColor: "green"}}>Add To Cart</button>
			<button onClick={() => removeFromCart(product)}style={{backgroundColor: "Red"}} >Remove</button>
		</div>
	);
}