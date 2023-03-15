import ShopItem from "./ShopItem";

function ListView({ products }) {
	return (
		<div className="list-view">
			{products.map(item =>
				<ShopItem
				name={item.name}
				color={item.color}
				img={item.img}
				price={item.price}
				/>
			)}
		</div>
	)
}

export default ListView;