import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import Books from './components/Books/Books';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Layout from './components/Layout/Layout';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Books />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
