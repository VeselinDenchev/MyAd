import { useState } from "react";
import ContactInputText from "./contact-input-text/ContactInputText";

export default function ContactForm() {
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    }); 
    
    const inputTexts = 
    [
        {name: 'name',  label: 'Your Name', value: contactForm.name},
        {name: 'email',  label: 'Your Email', value: contactForm.email}
    ];

    const inputChangeHandler = (event) => setContactForm({...contactForm, [event.target.name]: event.target.value});

    return (
        <div className="col-lg-4">
            <div className="contact-form">
                <form>
                    <div className="row">
                        {inputTexts.map(inputText =>
                            <ContactInputText key={inputText.name} {...inputText} inputChangeHandler={inputChangeHandler} />
                        )}
                    </div>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="subject" 
                            value={contactForm.subject} 
                            onChange={inputChangeHandler} 
                            className="form-control" 
                            placeholder="Subject" 
                        />
                    </div>
                    <div className="form-group">
                        <textarea 
                            name="message"
                            value={contactForm.message} 
                            onChange={inputChangeHandler} 
                            className="form-control" 
                            rows="5" 
                            placeholder="Message" 
                        />
                    </div>
                    <div><button className="btn" type="submit">Send Message</button></div>
                </form>
            </div>
        </div>
    );
}