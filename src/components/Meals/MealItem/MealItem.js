import React from 'react';

import MealItemForm from './MealItemForm/MealItemForm';
import classes from './MealItem.module.css'

const MealItem = (props) => {

    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <span className={classes.description}>{props.description}</span>
                <span className={classes.price}>{price}</span>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    );
};

export default MealItem;