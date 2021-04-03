import React, { useState } from 'react';

import PropTypes from 'prop-types';

export const AddCategory = ({ setCategory }) => {
  const [inputState, setInputState] = useState('Hinata');

  const handleInput = (e) => setInputState(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputState.trim().length > 2) {
      setCategory((cat) => [inputState, ...cat]);
      setInputState('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInput} type="text" value={inputState} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
};
