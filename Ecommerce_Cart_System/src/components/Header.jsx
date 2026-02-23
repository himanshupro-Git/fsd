export default function Header({ cartCount }){

	return(
		<div>
			<div style={{display:"flex",gap:"10px"}}>
			<img src="https://simicart.com/wp-content/uploads/eCommerce-logo.jpg" alt=""  style={{height:"40px",width:"40px"}}/>
			<h2 style={{marginTop:"0px"}}>React Demo App</h2>
			</div>
			
			<p>Cart Items Count: {cartCount}</p>
			<hr/>
		</div>
	);
}