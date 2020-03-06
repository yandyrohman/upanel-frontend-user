import React from 'react';
import './App.css';

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Content from './components/Content'


function App() {
  return (
    <React.Fragment>
      <Sidebar />
      <Header />
      <Content />
    </React.Fragment>
  )
}

export default App;
