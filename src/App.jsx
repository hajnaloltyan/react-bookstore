import { HashRouter as Router, RouterProvider } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories/Categories';
import Books from './components/Books/Books';
import ErrorPage from './components/ErrorPage/ErrorPage';

const router = Router([
  {
    path: '/',
    element: <Books />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'categories',
        element: <Categories />,
      },
    ],
  },
]);

export const App = () => (
  <RouterProvider router={router} />
);

export default App;
