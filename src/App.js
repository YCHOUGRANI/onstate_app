import React, { Component } from 'react';
import Products from './components/products';

    class App extends Component {

      state = {
        products: [],offset: 0,
      }

      componentDidMount() {

         fetch('./products.json')
        .then(res => res.json())
        .then((data) => {
          console.log(data.products);
          this.setState({ products: data.products })
        })
        .catch(console.log('Error'))
      }
     

      render() {
        return (
          <div className="container d-flex flex-column">
           <center><h1>Product List</h1></center>             
          <Products products={this.state.products} />
          </div>
        );
      }
    }

    export default App;