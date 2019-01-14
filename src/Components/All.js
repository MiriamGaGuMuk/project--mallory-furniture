import React, { Component } from 'react';
import request from 'superagent'
import Card from './Card';

class All extends Component {
	constructor() {
		super()

		this.state = {
			allData: [],
			filter: 'all'
		};

	}

	componentDidMount() {
		request
			.get('https://mallory-furniture-admin.now.sh/api/v1/products')
			.then(data => {
				this.setState({
					allData: data.body
				});
			})
	}

	filterprod = (item) => {

		this.setState({

			filter: item
		});
	}

	products = (item) => {

		if (item === "all") return this.state.allData

		if (item === true) return this.state.allData.filter(function (newItem) {

			return newItem.onSale === true

		});
	}


	render() {

		const allData = this.state.filter
		const newList = this.products(allData)
		const counting = newList.length

		return (
			<div>
				<div className='styling__text'>

					<h1 className='all__title'>All Products</h1>
					<p className='all__subtitle'>All available listing</p>
				</div>
				<div className='button__container'>

					<button id="all__active" onClick={() => { this.filterprod('all') }} className='button active'>All items</button>
					<button id="all__onsale" onClick={() => { this.filterprod(true) }} className='button'>On Sale</button>
					<p id="all__count" className='count'><span className='counter'>{counting}</span> items showing</p>

				</div>

				<div className='all__cards'>

					{newList.map(function (p) {

						return <Card
							name={p.item}
							price={p.price}
							image={p.imageLink}
							category={p.category}
							prodId={p._id}
						/>
						
					})}
				</div>
			</div>
		);
	}
}

export default All;