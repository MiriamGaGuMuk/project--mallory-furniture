import React, { Component } from 'react';
import Card from './Card';
import Slide_Categories from './Slide_Categories';

import request from 'superagent'


class Categories extends Component {

	constructor() {
		super()

		this.state = {
			allData: [],
			filter: 'all',

		};

	}

	componentDidMount() {

		request
			.get(`https://mallory-furniture-admin.now.sh/api/v1/products`)
			.then(data => {
				this.setState({
					allData: data.body

				});
			})
	}

	createList = () => {
		let category = this.props.match.params.class
		//console.log(category)
		if (category !== '') {
			return this.state.allData.filter(function (item) { return item.category === category });
		}

		return this.state.allData;
	}

	filterprod = (item) => {
		this.setState({
			filter: item
		});
	}


	products = (item, newArray) => {
		if (item === "all") return newArray
		if (item === true) return newArray.filter(function (newItem) { return newItem.onSale === true });
	}


	frstMayus = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	tored = (item) => {
		if (item === 'all') return true
	}

	inGrey = (item) => {
		if (item === true) return true
	}



	render() {

		let newListt = this.createList()
		const allData = this.state.filter
		const newList = this.products(allData, newListt)
		const counting = newList.length
		let title = this.frstMayus(this.props.match.params.class)

		let active = this.tored(this.state.filter) ? 'active' : '';
		let inactive = this.inGrey(this.state.filter) ? 'active' : '';


		console.log('Show me the style!!', active)
		console.log('Show me the style!!', inactive)


		return (
			<div>
				<Slide_Categories categoryPic={this.props.match.params.class} />
				<div className='styling__text'>
					<div className='products__conatainer'>
						<h1 className='all__title'>{title}</h1>
						<p className='all__subtitle'>All available listing</p>
					</div>
					<div className='button__container'>
						<button onClick={() => { this.filterprod('all') }} className={`button ${active}`}>All items</button>
						<button id="on__sale" onClick={() => { this.filterprod(true) }} className={`button ${inactive}`}>On Sale</button>
						<p className='count'><span className='counter'>{counting}</span> items showing</p>
					</div>
				</div>


				<div className='all__cards'>

					{newList.map(function (p) {
						return <Card name={p.item} price={p.price} image={p.imageLink} category={p.category} prodId={p._id} />
					})}
				</div>
			</div>
		);
	}
}

export default Categories;