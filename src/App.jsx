import React from 'react';

import Footer from './Footer/footer';
import Header from './Header/header';
import {Interact} from './Interact/interact';
import css from './App.module.css';

function App() {
  return (
    <div className={css.App}>
      <Header/>
      <Interact/>
      <Footer/>
    </div>
  )
}

export default App
