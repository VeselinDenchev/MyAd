import { useState } from "react";

import UserButton from "./user-button/UserButton";

export default function UserButtons() {
    const [userButtons, setUserButtons] = useState(
    [
        //{destination: 'wishlist', iconClassName: 'fa fa-heart'},
        {destination: 'cart', iconClassName: 'fa fa-shopping-cart'}
    ]);

    return (
        <div className="col-md-9">
            <div className="user">
                {userButtons.map(button =>
                    <UserButton key={button.destination} {...button} />
                )}
            </div>
        </div>
    );
}