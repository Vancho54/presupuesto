import React, { Fragment, useState } from 'react';
import Error from './Error'
import shortid from 'shortid'

const Form = ({saveSpend, saveCreateSpend}) => {

    const[name, setName] = useState('');
    const[money, setValue] = useState(0)
    const[error, setError] = useState(false)

    const addSpend = e => {
        e.preventDefault()

        if(money < 1 || isNaN(money) || name.trim() === '') {
            setError(true);
            return;
        }

        setError(false)

        const spend = {
            name,
            money,
            id: shortid.generate()
        }

        saveSpend(spend)

        saveCreateSpend(true)

        setName('')
        setValue(0)
    }

    return (
        <Fragment>
            <form
                onSubmit={addSpend}
            >
                <h2>
                    Agrega tus gastos aqui
                </h2>
                { error ? <Error mensaje='Presupuesto no valido o gasto sin nombre'/> : null } 
                <div className='campo'>
                    <label>
                        Nombre Gasto
                    </label>
                    <input
                        type='text'
                        className='u-full-width'
                        placeholder='ejemplo: Alcohol'
                        value={name}    
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label>
                        Cantidad Gasto
                    </label>
                    <input
                        type='number'
                        className='u-full-width'
                        placeholder='ejemplo: 300'    
                        value={money}
                        onChange={e => setValue(parseInt(e.target.value))}
                    />
                </div>
                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='agregar gasto'
                />
            </form>
        </Fragment>
    );
};

export default Form;