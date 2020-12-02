import React from 'react';
import { checkBudget } from '../helper'

const ControlBudget = ({budget, remaining}) => {
    return (
        <div>
            <div className='alert alert-primary'>
                Budget: $ {budget}
            </div>
            <div className={checkBudget(budget, remaining)}>
                Remaining: {remaining}
            </div>
        </div>
    );
};

export default ControlBudget;