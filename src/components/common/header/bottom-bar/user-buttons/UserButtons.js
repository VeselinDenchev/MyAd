import { useContext, useState } from "react";
import { CartContext } from "../../../../../contexts/CartContext";

import CartButton from "./cart-button/CartButton";

export default function UserButtons() {
    const { cart } = useContext(CartContext);

    return (
        <div className="col-md-9">
            <div className="user">
                <CartButton cartItemsCount={cart.length} />
            </div>
        </div>
    );
}