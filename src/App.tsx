import { useState } from 'react'
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopPage from './pages/TopPage';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <BrowserRouter basename='henkan-app'>
        <Routes>
          <Route index element={<TopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
