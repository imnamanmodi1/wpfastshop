import React, {useState} from 'react';
import './App.css';
import './App.scss';


import Products from './components/Products'
import Categories from './components/Categories'

let setHeaders = {
  params: {},
  url: 'https://jalaramsweets.com',
  crossdomain: true,
  auth: {
    username: "ck_a0afdc3bc2e3a744907029b229226b053473a6a2",
    password: "cs_b7f3c5d9cb95dc90a3399eb68b4ca842a77eedab"
  }
}

const App = () => {
  const [defaultHeaders, setdefaultHeaders] =  useState(setHeaders);
  console.log(defaultHeaders);
  return (
    <div className="App">
      <Categories headers={defaultHeaders} />
      <Products headers={defaultHeaders}/>
    </div>
  );
}

export default App;
