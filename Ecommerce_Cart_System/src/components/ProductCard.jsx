export default function ProductCard({ product, addToCart }){

	function handleCart(){
		addToCart(product);
	}

	return(
		<div style={{
			padding:10,
			border:"1px solid gray",
			width:"220px"
		}}>

			<img
				src={product.image}
				alt={product.name}
				width="200"
				height="200"/>

			<h4>{product.name}</h4>

			<p>Price: {product.price}</p>

			<button
				onClick={handleCart}
				style={{
					backgroundColor:"green",
					color:"white",
					padding:"5px",
					marginBottom:"0px"
				}}
			>
				Add To Cart
			</button>

		</div>
	);
}