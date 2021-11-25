import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const CategoryAdd = ( { setCategory } ) => {

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = ( e ) => setInputValue( e.target.value );

    const handleSubmit = ( e ) => {
        e.preventDefault();
        inputValue.trim().length > 2
            && setCategory( category => [ { id: 'etrwerrt6578*&', area: inputValue }, ...category]);
        setInputValue( '' );
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

CategoryAdd.propTypes = {
    setCategory: PropTypes.func.isRequired,
}

