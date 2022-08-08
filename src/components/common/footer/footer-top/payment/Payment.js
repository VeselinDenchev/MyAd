import PaymentItem from "./payment-item/PaymentItem";

export default function Payment() {
    const paymentItems = 
    [
        {className: 'payment-method', heading: 'We Accept:', images: <img src="img/payment-method.png" alt="Payment Method" /> },
        {
            className: 'payment-security', 
            heading: 'Secured By:', 
            images: 
            <>
                <img src="img/godaddy.svg" alt="Payment Security" />
                <img src="img/norton.svg" alt="Payment Security" />
                <img src="img/ssl.svg" alt="Payment Security" />
            </>
        }
    ];
    
    return (
        <div className="row payment align-items-center">
            {paymentItems.map(item => 
                <PaymentItem key={item.heading} paymentClassName={item.className} heading={item.heading}>
                    {item.images}
                </PaymentItem>
            )}
        </div>
    );
}