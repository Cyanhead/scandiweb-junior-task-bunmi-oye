import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>Nav bar</div>

      <Router>
        <Routes>
          <Route path="/" element={<div>PLP</div>} />
          <Route path="/product" element={<div>PDP</div>} />
          <Route path="/cart" element={<div>Cart</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
