function ShopCard({name, color, img, price}) {
	return (
		<div className="cards-list__item">
			<div className="cards-list__item--name">{name}</div>
			<div className="cards-list__item--color">{color}</div>
			<div><img className="cards-list__item--img" src={img} /></div>
			<span className="cards-list__item--price">{'$' + price}</span>
			<button className="cards-list__item--button" type="button">Add to card</button>
		</div>
	)
}

export default ShopCard;