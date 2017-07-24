import React from 'react';

const CartSummary = (props) => {
  var total = 0;
  for (var i=0; i < props.cart.length; i++) {
    total += props.cart[i].price;
  }
  return (
    <div className="CartSummary">
      <h3>My Cart</h3>
      <p>Total Items: <span id="ItemCount">{props.cart.length}</span></p>
      <p>Total Cost: R <span id="TotalCost">{total.toFixed(2)}</span></p>
    </div>
  )
};

CartSummary.propTypes = {
  cart: React.PropTypes.array.isRequired
};

export default CartSummary;
