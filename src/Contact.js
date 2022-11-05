import React from 'react'
import Footer from './Footer';


function Contact() {
    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-content">
                    <div className="main-cont">
                        <h1>Contact me</h1>
                        <p>Hi there, contact me to ask me about anything you have in mind.</p>
                        <div className="form">
                            <form action="/contact">
                                <div className="fields">
                                    <div className="names">
                                        <div className="form-fix">
                                            <label htmlFor="first_name">First name</label>
                                            <input type="text" id="first_name" name="first_name" className="input-fix" placeholder="Enter your first name" />
                                        </div>
                                        <div className="form-fix">
                                            <label htmlFor="last_name">Last name</label>
                                            <input type="text" id="last_name" name="last_name" className="input-fix" placeholder="Enter your last name" />
                                        </div>
                                    </div>
                                    <div className="form-fixtwo">
                                        <label htmlFor="email">Email</label>
                                        <input type="text" id="email" name="email" className="input-fix2" placeholder="yourname@email.com" />
                                    </div>
                                    <div className="form-fix">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="message" id="message" className="input-fix2" cols="30" rows="10" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
                                    </div>

                                    <p>You agree to providing your data to Samuel Ikoli who may contact you.</p>
                                </div>
                                <button id="btn__submit" className="button">Send message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact