import React, { Fragment } from 'react';

import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

import classes from './Header.module.css';
import mealsImg from '../../../assets/meals.jpeg';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt='Meals' />
            </div>
        </Fragment>
    );
};

export default Header;