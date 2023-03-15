//Реализуйте компонент Store, который управляет состоянием приложения, хранит список товаров в атрибуте products.

import { useState } from 'react';
import CardsView from './CardsView';
import IconSwitch from './IconSwitch';

function Store() {
	const icons = ["view_list", "view_module"];
	
	const products = [{
		name: "Nike Metcon 2",
		price: "130",
		color: "red",
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
	 }, {
		name: "Nike Metcon 2",
		price: "130",
		color: "green",
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
	 }, {
		name: "Nike Metcon 2",
		price: "130",
		color: "blue",
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
	 }, {
		name: "Nike Metcon 2",
		price: "130",
		color: "black",
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
	 }, {
		name: "Nike free run",
		price: "170",
		color: "black",
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
	 }, {
		name: "Nike Metcon 3",
		price: "150",
		color: "green",
		img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
	 }];

	 return (
		<>
		<IconSwitch 
			icon={"view_list"} 
			onSwitch={() => console.log("change state here")}
		/>
		<CardsView products={products} />
		</>
	 )
}

export default Store;