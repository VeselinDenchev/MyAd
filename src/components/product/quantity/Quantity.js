import { useState } from "react";

import { QuantityChangeTypes } from "./QuantityChangeConstants";

export default function Quantity({quantity, setQuantity}) {
    function quantityChangeHandler(changeType) {
        if (changeType === QuantityChangeTypes.Increment) {
            setQuantity(quantity => (parseInt(quantity) + 1).toString());
        }
        else if (changeType === QuantityChangeTypes.Decrement) {
            if (quantity === '1') return;

            setQuantity(quantity => (parseInt(quantity) - 1).toString());
        }
    }

    function inputQuantityChangeHandler(event) {
        if (event.target.value === '') {
            setQuantity('');
            return;
        }

        const isInvalidInteger  = event.target.value === '-' || event.target.value < 1 || event.target.value > 30
                                || isNaN(event.target.value);
        if (isInvalidInteger) return;

        setQuantity(event.target.value);
    }

    function quantityCheckOnBlurHandler() {
        if (quantity === '') {
            setQuantity('1');
        }
    }

    return (
        <div className="qty" onBlur={quantityCheckOnBlurHandler}>
            <button className="btn-minus" onClick={() => quantityChangeHandler(QuantityChangeTypes.Decrement)}><i className="fa fa-minus"></i></button>
            <input type="text" value={quantity} onChange={inputQuantityChangeHandler} onBlur={inputQuantityChangeHandler} />
            <button className="btn-plus" onClick={() => quantityChangeHandler(QuantityChangeTypes.Increment)}><i className="fa fa-plus"></i></button>
        </div>
    );
}