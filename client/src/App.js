import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Map from './components/Map'



class App extends Component {

  render() {
    return (
      <div className="container">
        <Header />
        <Main />
        <Map />
        <Footer />
      </div>
    );
  }
}

export default App;
