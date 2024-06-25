import './ContactPage.css';
import { Navigation } from '../../components/Navigation'

function ContactPage() {
    return (
        <div className="ContactPage">
            <Navigation />
            <div className="contact-container">
                <div className="form-container">
                    <h1>Contact us</h1>
                    <p className="subheading">Send us a question or feedback!</p>
                    <form id="contactForm">
                        <input type="text" id="firstName" name="firstName" placeholder="First name" required/>
                        <input type="text" id="lastName" name="lastName" placeholder="Last name" required/>
                        <input type="email" id="email" name="email" placeholder="Email address" required/>
                        <textarea id="message" name="message" rows="4" placeholder="Enter your question or message"
                                  required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                {/*<div className="image-container"></div>*/}
            </div>
        </div>
    );
}

export default ContactPage;
