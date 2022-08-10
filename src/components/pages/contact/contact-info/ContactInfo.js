import toUpperFirstLetter from "../../../../utils/toUpperFirstLetter";

export default function ContactInfo({contact}) {
    const contactToUpperFirstLetter = toUpperFirstLetter(contact);

    return (
        <div className="col-lg-4">
            <div className="contact-info">
                <h2>Our {contactToUpperFirstLetter}</h2>
                <h3><i className="fa fa-map-marker"></i>123 {contactToUpperFirstLetter}, Los Angeles, CA, USA</h3>
                <h3><i className="fa fa-envelope"></i>{contact}@example.com</h3>
                <h3><i className="fa fa-phone"></i>+123-456-7890</h3>
                <div className="social">
                    <a href=""><i className="fab fa-twitter"></i></a>
                    <a href=""><i className="fab fa-facebook-f"></i></a>
                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                    <a href=""><i className="fab fa-instagram"></i></a>
                    <a href=""><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
);
}