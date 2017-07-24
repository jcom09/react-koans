import React from 'react';

const Shoe = (props) => (
  <div>
    <div className='card' style={{padding: 20, marginBottom: 0}}>
        <h4>{props.shoeDetail.brand} > {props.shoeDetail.name}</h4>
        <h7>R {props.shoeDetail.price.toFixed(2)}</h7>
    </div>
    <div className='button'>
      <a onClick={() => props.tapShoe(props.shoeDetail)}>ADD TO CART</a>
    </div>
  </div>
);

Shoe.propTypes = {
  brand: React.PropTypes.string,
  name: React.PropTypes.string,
  price: React.PropTypes.number,
  onShoeSelect: React.PropTypes.func,
};

export default Shoe;
