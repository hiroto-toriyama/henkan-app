import { useState } from 'react'
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopPage from './pages/TopPage';
import FullHalfPage from './pages/FullHalfPage';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <BrowserRouter basename='henkan-app'>
        <Routes>
          <Route index element={<TopPage />} />
          <Route path='/full-half' element={<FullHalfPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
