import React from 'react';

const Spend = ({spend}) => (
    <li className='gastos'>
        <p>
            {spend.name}
            <span className='gasto'>$ {spend.money}</span>
        </p>
    </li>
)


export default Spend;