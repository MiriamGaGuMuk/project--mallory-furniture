import React, { Component } from 'react';

class Slide_Categories extends Component {

  slide = (pic) => {

    const imageSlide = {

      seating: 'https://gitlab.com/MiriamGaGu/dmnproject--mallory-furniture/raw/master/src/images/category-seating.png',
      tables: 'https://gitlab.com/MiriamGaGu/dmnproject--mallory-furniture/raw/master/src/images/category-tables.png',
      desks: 'https://gitlab.com/MiriamGaGu/dmnproject--mallory-furniture/raw/master/src/images/category-desks.png',
      storage: 'https://gitlab.com/MiriamGaGu/dmnproject--mallory-furniture/raw/master/src/images/category-storage.png',
      bedroom: 'https://gitlab.com/MiriamGaGu/dmnproject--mallory-furniture/raw/master/src/images/category-bedroom.png',
      miscellaneous: 'https://gitlab.com/MiriamGaGu/dmnproject--mallory-furniture/raw/master/src/images/category-miscellaneous.png'
    }

    return imageSlide[pic]
  }



  render() {
    console.log('Returning each category image', this.props.categoryPic)


    return (
      <div className='slide'>

        <img className='slide__img' src={this.slide(this.props.categoryPic)} alt="Some furniture"/>

      </div>
    );
  }
}

export default Slide_Categories;