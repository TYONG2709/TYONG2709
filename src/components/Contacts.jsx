import React from 'react';
import gmailIcon from '../assets/icons/gmail-icon.png';
import whatsappIcon from '../assets/icons/whatsapp-icon.png';
import mobileIcon from '../assets/icons/mobile-icon.png';
import linkedinIcon from '../assets/icons/linkedin-icon.png';

/**
 * Include all contact details
 * @returns A section about my contact information
 */
function Contacts() {
    return (
        <section id="about" style={{ textAlign: 'center', padding: '50px 20px'}}>
            <p>Contact details:</p>
            <div>
                <a href="mailto:tyong2709@gmail.com"><img class="logo" src={gmailIcon} alt="Gmail address" /></a>
                <a href="https://wa.me/+60183129568"><img class="logo" src={whatsappIcon} alt="Whatsapp number (MY)" /></a>
                <a href="https://www.linkedin.com/in/tengyiong/"><img class="logo" src={linkedinIcon} alt="Linkedln profile" /></a>
            </div>
            <hr width="100%" size="2" color="white" />
            <div id="leftrightBox">
                <div>
                    <img class="logo" src={mobileIcon} alt="mobile number icon" />
                </div>
                <div style={{ fontSize: '12px' }}>
                    <p>UK: (+44) 07355 191599</p>
                    <p>MY: (+60) 018 312 9568</p>
                </div>
            </div>
        </section>
    );
};

export default Contacts;