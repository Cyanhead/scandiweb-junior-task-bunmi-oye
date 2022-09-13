import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/Global.style';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Header from './components/Header';
import ListingPage from './pages/ListingPage';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<ListingPage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
