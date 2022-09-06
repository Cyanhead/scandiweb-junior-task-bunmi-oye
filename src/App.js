import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/Global.style';
import { theme } from './styles/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>Nav bar</div>

        <Router>
          <Routes>
            <Route path="/" element={<div>PLP</div>} />
            <Route path="/product" element={<div>PDP</div>} />
            <Route path="/cart" element={<div>Cart</div>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
