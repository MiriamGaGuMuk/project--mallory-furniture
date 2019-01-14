import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import logoWhite from '../images/mf-logo-white.svg';
import ShoppingCart from './ShoppingCart';


class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className='header__container'>
          <Link to='/' className='links__head'>
            <img className='header__logo' src={logoWhite} alt="Living room pic" />
          </Link>
          <nav className='header__principal'>
            <ul className='listNav'>
              <li><Link to='/About' className='links__head'>About</Link></li>
              <li><Link to='/Terms' className='links__head'>Terms + Condition</Link></li>
              <li>|</li>
              <li><Link to='/all' className='links__head'>All</Link></li>
            </ul>
          </nav>
          <nav className='header__secondary'>
            <ul className='listNav'>
              <li><NavLink to={'/section/seating'} className='header_link__blue' activeStyle={{ color: '#ffc107', border: 'none' }} >Seating</NavLink></li>
              <li><NavLink to={'/section/tables'} className='header_link__blue' activeStyle={{ color: '#ffc107', border: 'none' }}> Tables</NavLink></li>
              <li><NavLink to={'/section/desks'} className='header_link__blue' activeStyle={{ color: '#ffc107', border: 'none' }}>Desks</NavLink></li>
              <li><NavLink to={'/section/storage'} className='header_link__blue' activeStyle={{ color: '#ffc107', border: 'none' }}>Storage</NavLink> </li>
              <li><NavLink to={'/section/bedroom'} className='header_link__blue' activeStyle={{ color: '#ffc107', border: 'none' }} >Bedroom</NavLink></li>
              <li><NavLink to={'/section/miscellaneous'} className='header_link__blue' activeStyle={{ color: '#ffc107', border: 'none' }}> Misc</NavLink></li>
              <li>|</li>
              <ShoppingCart />
            </ul>
          </nav>
        </div>
      </header>
    );
  }

}

export default Header;