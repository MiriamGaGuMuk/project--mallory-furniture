import React, { Component } from 'react';
import Slide_title from './Slide_title';
import Card from './Card';
import NavCategoriesLinks from './NavCategoriesLinks';

import { Link } from 'react-router-dom';

import request from 'superagent'


class Home extends Component {

	constructor() {
		super()

		this.state = {
			allData: [],
			filter: 'all'
		};

	}

	state = {
		sidebarOpen: false
	};




	componentDidMount() {
		request
			.get('https://mallory-furniture-admin.now.sh/api/v1/products')
			.then(data => {
				this.setState({
					allData: data.body
				});
			})
	}


	createList = () => {
		return this.state.allData.filter(function (item) { return item.featured === true });
	}


	render() {
		console.log('Furniture list', this.createList())
		const furniture = this.createList()
		
		return (
			<div>
				<Slide_title />

				<div className='styling__text'>
					<div className='products__conatainer'>
						<h1 className='all__title'>Featured Products</h1>
						<p className='all__subtitle'>Check out some of our favorite listings</p>
					</div>
				</div>

				<div className='all__cards'>
					{furniture.map(function (p) {
						return <Card name={p.item} price={p.price} image={p.imageLink} category={p.category} prodId={p._id} />
					})}
				</div>

				<div className='container__button'>
					<Link className='button__all__link' to='/all'><button className='button__all'>All Products</button></Link>
				</div>

				<NavCategoriesLinks />

			</div>
		);
	}
}

export default Home;