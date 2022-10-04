import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopPage from './pages/TopPage';
import FullHalfPage from './pages/FullHalfPage';
import CsvTsvPage from './pages/CsvTsvPage';
import HeadFootPage from './pages/HeadFootPage';

function App() {
  return (
    <div>
      <BrowserRouter basename='henkan-app'>
        <Routes>
          <Route index element={<TopPage />} />
          <Route path='/full-half' element={<FullHalfPage />} />
          <Route path='/csv-tsv' element={<CsvTsvPage />} />
          <Route path='/head-foot' element={<HeadFootPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
