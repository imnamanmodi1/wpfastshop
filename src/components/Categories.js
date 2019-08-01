import React, { Component } from 'react'
import axios from 'axios';
// import bulma from 'bulma/css/bulma.css'




class Categories extends Component {
  constructor(props) {
    super(props)
    let defaultHeaders = props.headers;
    console.log(props)
    this.state = {
      categories: [],
      dataUpdated: false,
      defaultHeaders: defaultHeaders
    }
  }

  componentDidMount() {
    let defaultHeaders = this.state.defaultHeaders;
    axios.get(`${defaultHeaders.url}/wp-json/wc/v2/products/categories`, this.state.defaultHeaders).then(
      (fetchedCategories) => {
        let data = fetchedCategories.data;
        this.setState({ categories: data, dataUpdated: true })
        console.log(data)

      }
    )
  }



  render() {
    let categories = this.state.categories;
    return (
      <>
        <div className="tags are-medium main-wrapper">
        {
          categories.map((category, index) => {
            if (category.count > 0)
              return (
                  <span className="tag is-dark" key={index} > {category.name} </span>
              )
          }

          )}
        </div>

      </>
    )
  }
}

export default Categories;
