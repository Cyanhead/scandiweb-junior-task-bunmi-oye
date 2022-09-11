import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/Global.style';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Header from './components/Header';
import ListingPage from './pages/ListingPage/ListingPage';

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
              <Route path="/product" element={<div>PDP</div>} />
              <Route path="/cart" element={<div>Cart</div>} />
            </Routes>
          </Router>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
