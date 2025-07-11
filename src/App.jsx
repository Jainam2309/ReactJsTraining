import './App.css'
import Cart from './Component/Cart'
import ProductList from './Component/ProductList'
import { CartProvider } from './Component/CartContext'
import LudoBoard from './Component/LudoBoard'
import TodoList from './Component/TodoList'
import Lottery from './Component/Lottery'
import React, { useState, useEffect } from 'react';

import Joker from './Component/Joker'
import Comments from './Component/Comments'

import Item from './Component/Item'
import NewProduct from './Component/NewProduct'
import Counter from './Component/Counter'

import City from './Component/City'
import Practice from './Component/Practice'
import Profile from './Component/Profile'
import LiveCharacterCount from './Component/LiveCharacterCount'
import Toogle from './Component/Toogle'
import Password from './Component/Password'








function App() {


  return (
    <>
    
      {/* <LudoBoard /> */}
      {/* <TodoList /> */}
      {/* <Lottery /> */}
      {/* <Counter /> */}
      {/* <Data /> */}
      {/* <Comments /> */}
      {/* <Joker /> */}
      <Practice />
       {/* <CartProvider>
      <div style={styles.app}>
        <h1>🛍 Simple Shopping Cart</h1>
        <div style={styles.grid}>
          <ProductList />
          <Cart />
        </div>
      </div>
    </CartProvider> */}
    {/* <NewProduct /> */}
    {/* <Item /> */}
    {/* <City /> */}
    <Profile />
    <LiveCharacterCount />
    <Toogle />
    <Password />


     

      
     
    </>
  )
}

export default App

