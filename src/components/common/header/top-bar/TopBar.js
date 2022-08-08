import React from "react";
import TopContact from "./top-contact/TopContact";

export default function TopBar() {
    const topContacts = [
                            {iconClassName: "fa fa-envelope", contactAddress: 'support@email.com'},
                            {iconClassName: 'fa fa-phone-alt', contactAddress: '+012-345-6789'},
                        ];
    return (
        <div className="top-bar">
            <div className="container-fluid">
                <div className="row">
                {topContacts.map(contact => 
                        <TopContact key={contact.contactAddress} {...contact} />
                    )}
                </div>
            </div>
        </div>
    );
}