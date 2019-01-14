import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {

    const url = '/product/' + this.props.prodId
    return (

      <div className='card'>

        <Link to={url} className='links__head'>

          <div className='card__form'>
            <img className='card__img' src={this.props.image} alt="Some furniture"/>
          </div>

          <h5 className='card__title'>{this.props.name}</h5>
          <p className='card__price'>$ {this.props.price}</p>

        </Link>

      </div>
      
    );
  }
}

export default Card;