import React from 'react';
import {countByKey} from '../utils';

const Facet = (props) => (

  <div>
    {countByKey(props.shoes, props.searchValue).map((items, i) => {
        return <li key={i} onClick={props.onFacetSelect}>{items}</li>
      })
    }
  </div>
);

Facet.propTypes = {
  items: React.PropTypes.array.isRequired,
  onFacetSelect: React.PropTypes.func
};

export default Facet;
