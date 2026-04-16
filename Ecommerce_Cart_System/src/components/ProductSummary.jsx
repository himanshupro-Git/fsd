export default function ProductSummary({ product }) {
	return (
		<div>
			{product.map((item) => (
				<p key={item.id}>{item.name}</p>
			))}
		</div>
	);
}