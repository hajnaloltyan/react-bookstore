import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { checkTheStatus } from '../../redux/categories/categoriesSlice';
import './Categories.css';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleCheckStatus = () => {
    dispatch(checkTheStatus());
    setButtonClicked(true);
  };

  return (
    <section className="categories">
      <h2>Status:</h2>
      <h2>{status}</h2>
      {!buttonClicked
        && (
        <button type="button" onClick={handleCheckStatus}>
          Check Status
        </button>
        )}
    </section>
  );
};

export default Categories;
