import React, { Component } from 'react'
import axios from 'axios/index';

import Loader from './Loader';

// let defaultHeaders = {
//   params:{},
//   withCredentials: true,
//   auth: {
//       username: process.env.REACT_APP_WOOCOMMERCE_API_CLIENT,
//       password: process.env.REACT_APP_WOOCOMMERCE_API_SECRET
//   }
// };


class Products extends Component {
  constructor(props) {
    super(props);
    let defaultHeaders = props.headers;
    console.log(props)
    this.state = {
      productsData: [],
      dataUpdated: false,
      defaultHeaders: defaultHeaders
    };
  }

  componentDidMount() {
    //get all products
    this.state.defaultHeaders.params = {
      per_page: 20,
      orderby: 'date',
      status: 'publish'
    }
    axios.get(`https://jalaramsweets.com/wp-json/wc/v2/products`, this.state.defaultHeaders).then(
      (fetchedProducts) => {
        //data stores product array after GET
        let data = fetchedProducts.data;
        console.log(data)
        //update the state with products data
        this.setState({ productsData: data, dataUpdated: true })
      }
    )


  }

  render() {
    let productsData = this.state.productsData;
    return (
      <div>
        { this.state.dataUpdated ?
          productsData.map((product, index) =>
            //image : {product.images[0].src}
            //weight: {product.weight}
            //price: {product.categories[0].price}
            <>
              <div className="box main-wrapper" key={index}>
                <article className="media media-wrapper">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img className="product-image" src={product.images[0].src} alt={product.name} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{product.name}</strong>
                      </p>
                    </div>
                    <nav className="level is-mobile">
                      <div className="level-left">
                        <p className="level-item">
                          <small>Category: {product.categories[0].name}</small>
                          <br />
                          <small>Weight: {product.weight}(in grams)</small>
                        </p>
                        <p className="level-item price">
                          <small>JSP: INR{product.price}</small>
                        </p>
                      </div>
                    </nav>
                  </div>
                </article>
              </div>
            </>
          ) : <Loader />
          }
      </div>
    )
  }
}

export default Products;
