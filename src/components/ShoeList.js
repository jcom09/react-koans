import React from 'react';
import Shoe from './Shoe';


const ShoeList = (props) => (
  <div>
    {props.shoes.map((item,index) =>
      <div key={index} style={{marginBottom: 50}}>
        <Shoe key={item.id} shoeDetail={props.shoes[index]} tapShoe={props.onShoeSelect}/>
      </div>
    )}
  </div>
);

ShoeList.propTypes = {
  shoes: React.PropTypes.array.isRequired,
  onShoeSelect: React.PropTypes.func
};

export default ShoeList;
