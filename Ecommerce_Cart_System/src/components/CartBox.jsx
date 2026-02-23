export default function CartBox({ cart }){

	const total = cart.reduce(
		(sum, item) => sum + item.price,0
	);

	return(
		<div style={{
			marginTop:"20px",
			border:"1px solid grey",
			padding:"10px"
		}}>
			<h4>Total Amount: {total}</h4>
            <ul>
                
            </ul>

			<form style={{display:"flex",alignItems:"center",gap:"20px"}}>
				<p>Enter your address:</p>
				<input
					type="text"
					placeholder="Enter address"
				/>
			</form>
            <button>Confirm Details</button>

		</div>
	);
} 