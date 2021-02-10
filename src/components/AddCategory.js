import React, { useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories(cats => [inputValue, ...cats ]);
    setInputValue('');
  }

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={inputValue}
        onChange={handleChangeInput}
        placeholder="Busca tu gif Favorito :D"
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}