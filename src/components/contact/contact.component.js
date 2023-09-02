import React from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.component.styles.scss';
import Button from "../button/button.component";

export default function Contactform() {

    const [formData, setformData] = React.useState(
        {
            user_name: "",  
            user_email: "", 
            subject: "",
            message: ""
        }
    )

    function handleChange(event) {
        const {name, value,type,checked} = event.target
        setformData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    };

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_qbqm2e6', 
                    'template_1w4yql9', 
                    form.current, 
                    'rm2ZaUMW7RRk64R7B')
        .then((result) => {
            console.log(result.text);
            console.log("Message successfully sent.")
        }, (error) => {
            console.log(error.text);
            console.log("There is error! Please retry.");
            alert("Message Sent")
        }
        );
        e.target.reset();
    };

    //  function handleSubmit(event) {
    //     event.preventDefault()
    //      console.log(formData)
    //  }

    return (
        <div className="form-container">
            
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <h1>Contact Us</h1>
                    <h3>
                        <li>Why can't you contact Us. We are here for you.</li> 
                        <li>If you have questions of any sort we are here to answer them all.</li> 
                        <li>Any querries we are here to clear them all.</li> 
                        <li>Any doubts we are here to clear them all.</li> 
                        <li>Just contact us and in no time we will be in touch with you.</li>    
                    </h3>
                    
                    <div className="contact-input">  
                        <label className="contact-name-label">Enter Your Name:</label>
                        <input
                            type="text"
                            placeholder="Name"
                            onChange={handleChange}
                            name="user_name"
                            value={formData.name}
                            required
                        />
                    </div>

                    <div className="contact-inputs ">
                        
                        <label className="contact-email-label">Enter Your Email:</label>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            onChange={handleChange}
                            name="user_email"
                            value={formData.email}
                            required
                        />
                    </div>

                    <div className="contact-input">
                        
                        <label className="contact-subject-label">Enter Your Email subject:</label>
                        <input 
                            value={formData.subject}
                            placeholder="Email Subject"
                            onChange={handleChange}
                            name="subject"
                            required
                        />
                    </div>

                    <div className="contact-input contact-message">
                        
                        <label className="contact-message-label">Type your message:</label>
                        <textarea 
                            value={formData.message}
                            placeholder="Your Message"
                            onChange={handleChange}
                            name="message"
                            required
                        />
                    </div>
                    <div className="contact-btn">
                        <button >SUBMIT</button>
                    </div> 
                </form>
                
            <div className="contact-img">
                <img src={require('../../images/contactUs.jpg')} alt="The team"/>
                
            </div>
            
        </div>
    )
}