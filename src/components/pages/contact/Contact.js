import ContactForm from "./contact-form/ContactForm";
import ContactInfo from "./contact-info/ContactInfo";
import ContactMap from "./contact-map/ContactMap";

export default function Contact() {
    const contacts = ['office', 'store']

    return (
        <div className="contact">
            <div className="container-fluid">
                <div className="row">
                    {contacts.map(contact =>
                        <ContactInfo key={contact} contact={contact} />
                    )}
                    <ContactForm />
                    <ContactMap />
                </div>
            </div>
        </div>
    );
}