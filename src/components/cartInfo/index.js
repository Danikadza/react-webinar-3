import React from "react";
import PropTypes from "prop-types";
import './style.css';
import Controls from '../controls'

function calculateSummary(cart) {
    const count = cart.reduce((total, item) => total + item.count, 0);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.count, 0);
    return { count, totalPrice };
}

function pluralize(number, one, few, many) {
    if (number % 10 === 1 && number % 100 !== 11) {
        return one;
    } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
        return few;
    } else {
        return many;
    }
}

function CartInfo({ cart, onAdd }) {

    const { count, totalPrice } = calculateSummary(cart);
    const word = pluralize(count, "товар", "товара", "товаров");
    onAdd
    return (
        <div className="CartInfo-wrapper">
            <div className="CartInfo">
                <div className='CartInfo-cart'>
                    В корзине:
                </div>
                <div className='CartInfo-sum'>
                    {count} {word} / {totalPrice} ₽
                </div>
            </div>
            <Controls onAdd={onAdd} />

        </div>
    )
}

export default React.memo(CartInfo);