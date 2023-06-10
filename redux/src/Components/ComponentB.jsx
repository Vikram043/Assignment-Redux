import React from 'react';
import { useDispatch } from 'react-redux';
import { setValue } from '../actions'; // Assuming you'll create an actions file

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(setValue(value));
  };

  return (
    <div>
      Component B: <input type="text" onChange={handleChange} />
    </div>
  );
};

export default ComponentB;
