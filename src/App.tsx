import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopPage from './pages/TopPage';
import FullHalfPage from './pages/FullHalfPage';
import CsvTsvPage from './pages/CsvTsvPage';

function App() {
  return (
    <div>
      <BrowserRouter basename='henkan-app'>
        <Routes>
          <Route index element={<TopPage />} />
          <Route path='/full-half' element={<FullHalfPage />} />
          <Route path='/csv-tsv' element={<CsvTsvPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
