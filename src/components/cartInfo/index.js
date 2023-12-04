import React from "react";
import PropTypes from "prop-types";
import './style.css';
import Controls from '../controls'

function pluralize(number, one, few, many) {
    if (number % 10 === 1 && number % 100 !== 11) {
        return one;
    } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
        return few;
    } else {
        return many;
    }
}

function CartInfo({ cart, onAdd, totalCartPrice }) {

    if (cart.length === 0) {
        return (
            <div className="CartInfo-wrapper">
                <div className="CartInfo">
                    <div className='CartInfo-cart'>В корзине:</div>
                    <div className='CartInfo-sum'>пусто</div>
                </div>
                <Controls onAdd={onAdd} />
            </div>
        );
    }

    const word = pluralize(cart.length, "товар", "товара", "товаров");
    onAdd
    return (
        <div className="CartInfo-wrapper">
            <div className="CartInfo">
                <div className='CartInfo-cart'>
                    В корзине:
                </div>
                <div className='CartInfo-sum'>
                    {cart.length} {word} / {totalCartPrice} ₽
                </div>
            </div>
            <Controls onAdd={onAdd} />

        </div>
    )
}

export default React.memo(CartInfo);
