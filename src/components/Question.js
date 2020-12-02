import React, { useState } from 'react';
import Error from './Error'

const Question = ({setBudget, setRemaining, setShowQuestion}) => {
    const [money, setMoney] = useState(0)
    const [error, setError] = useState(false)

    const handleChange = e => {
        setMoney(parseInt(e.target.value))
    }

    const submitMoney = e => {
        e.preventDefault();

        if(money < 1 || isNaN(money)) {
            setError(true)
            return
        }

        setError(false)
        setBudget(money)
        setRemaining(money)
        setShowQuestion(false)
    }

    return (
        <div>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje='El presupuesto es incorrecto'/> : null }
            <form 
                onSubmit={submitMoney}
            >
                <input 
                    type='number'
                    className='u-full-width'
                    placeholder='Coloca tu presupuesto'
                    onChange={handleChange}
                />

                <input 
                    type='submit'
                    className='button-primary u-full-width'
                    value='definir presupuesto'
                />
            </form>
        </div>
    );
};

export default Question;