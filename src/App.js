import React, { Component } from 'react';
import Api from './api/index';
import NavBar from './components/NavBar';
import Facet from './components/Facet';
import ShoeList from './components/ShoeList';
import CartSummary from './components/CartSummary';
//import Api from './api';

class App extends Component {

  /**
   * TIP:
   *  - this.state = {...}
   *  - this.someFunction = this.someFunction.bind(this)
   * */
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
      cart: [],
      search: '',
      facetSelected: null,
     }
  }

  /**
   * TIP:
   *  - Api.getShoes() returns a promise
   *  - this.setState() might be useful
   * */
  componentDidMount() {
    let self = this;
    Api.getShoes().then(function(data) {
      console.log(data);
      self.setState({ shoes: data }, () => console.log(self.state));
    });
  }
// this.setState({ shoes: data.results });


  handleShoeSelect = (shoe) => {
    this.setState({ cart: [...this.state.cart, shoe] }, () => console.log(this.state));
  }

  handleFacetSelect = () => {
    if (this.state.facetSelected == null)
      this.setState({ facetSelected: 1 }, () => console.log(this.state));

    if (this.state.facetSelected == 1)
      this.setState({ facetSelected: null }, () => console.log(this.state));
  }

  filterUpdate(value) {
    this.setState({ search: value }, () => console.log(this.state.search));
  }

  render() {
    const {filterVal} = this.props
    return (
      <div>

        <NavBar title="My App Store"/>

        <div className="row">

          <div className="col s2">
          <form>
            <input
              type='text'
              ref='filterInput'
              placeholder='Type to filter..'
              // binding the input value to state
              value={filterVal}
              onChange={() => {
               this.filterUpdate(this.refs.filterInput.value)
              }}
            />
          </form>
            <Facet searchValue={this.state.search} shoes={this.state.shoes} onFacetSelect={this.handleFacetSelect} />
          </div>

          <div className="col s6">
            <ShoeList shoes={this.state.shoes} onShoeSelect={this.handleShoeSelect} />
          </div>

          <div className="col s4">
            <CartSummary cart={this.state.cart} />
          </div>

        </div>
      </div>

    );
  }
}

export default App;
