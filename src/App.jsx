import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories/Categories';
import Books from './components/Books/Books';
import ErrorPage from './components/ErrorPage/ErrorPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="categories" element={<Categories />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);

export default App;
