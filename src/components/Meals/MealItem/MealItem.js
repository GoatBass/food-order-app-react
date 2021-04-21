import React, { useContext } from 'react';

import MealItemForm from './MealItemForm/MealItemForm';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css'

const MealItem = (props) => {

    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <span className={classes.description}>{props.description}</span>
                <span className={classes.price}>{price}</span>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;