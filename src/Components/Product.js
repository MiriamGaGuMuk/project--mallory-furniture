import React, { Component } from 'react';

import request  from 'superagent'

class Product extends Component {

	constructor(){
  		super()

  		this.state={

  			allData: [],
  			filter: 'all',

  		};

  	}

	componentDidMount(){

		let item = this.props.match.params.prod

		console.log('This is the id', item)

	  	request
	  		.get(`https://mallory-furniture-admin.now.sh/api/v1/products/${item}`)
	  		.then(data =>{
	  			this.setState({
	  				allData: data.body

	  			});
	  		})
	}



  render() {
  	console.log(this.state.allData)
	  const furnishing = this.state.allData
	  
      return (

    	<div className='product'>
    		<div className='product__imgCard'>
    			<img src={furnishing.imageLink} className='product__image' alt="Some furniture" />
    		</div>

    		<div className='product__data'>
    			<div className='product__info'>
    				<h1 className='product__info__title'>{furnishing.item}</h1>
    				<h5 className='product__info__price'>${furnishing.price}</h5>
    			</div>

    			<div className='product__action'>
    				<div>
    					<p className='condition__title'>Condition</p>
    					<p className='condition__result'>{furnishing.condition}</p>
    				</div>
					
    				<div>
    					<p className='condition__title'>Measurements</p>
    					<p className='condition__result'>W:{furnishing.width} L:{furnishing.length} H:{furnishing.height}</p>
    				</div>

    				<button className='buy__button'>Add to Car</button>

    			</div>
    		</div>
    	</div>
    );
  }
}

export default Product;