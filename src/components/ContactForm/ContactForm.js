import React from 'react'

/* Styling */
import './ContactForm.css';

function ContactForm() {
    return (
        <div className="contact-form-container"> 
            <h1>
                Let's get in touch!
                <a href="mailto:sundgren.pontus@gmail.com">
                    <p className="contact-mail">sundgren.pontus@gmail.com</p>
                </a>
            </h1>
        </div>
    );
}

export default ContactForm;