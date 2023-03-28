import React from "react";
import {AiFillEnvironment } from "react-icons/ai";
import {HiMail,HiPhone } from "react-icons/hi";
import {FaGlobeAsia} from "react-icons/fa"
import { useRef } from "react";
import './contact.component.styles.scss';

export default function Contactform() {
    const [formData, setformData] = React.useState(
        {
            name: "",  
            email: "",
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
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    const navRef = useRef();

    const showLinksbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
<div>
        <div className="contact-info"> 
            <form onSubmit={handleSubmit} className="contact-form">
                <div  className="contact-words">
                    <h1>Contact Us</h1>
                    <h3>
                        <li>Why can't you contact Us. We are here for you.</li> 
                        <li>If you have questions of any sort we are here to answer them all.</li> 
                        <li>Any querries we are here to clear them all.</li> 
                        <li>Any doubts we are here to clear them all.</li> 
                        <li>Just contact us and in no time we will be in touch with you.</li>    
                    </h3>
                </div>
                    <div className="contact-input">
                        <input
                            type="text"
                            placeholder="Name"
                            onChange={handleChange}
                            name="name"
                            value={formData.name}
                            required
                        />
                    </div>

                    <div className="contact-input">
                        <input
                            type="email"
                            placeholder="email"
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                            required
                        />
                    </div>
                
                    <div className="contact-input">
                        <textarea 
                            value={formData.subject}
                            placeholder="Subject"
                            onChange={handleChange}
                            name="subject"
                            required
                        />
                    </div>

                    <div className="contact-input">
                        <textarea 
                            value={formData.message}
                            placeholder="Your Message"
                            onChange={handleChange}
                            name="message"
                            required
                        />
                    </div>
                    <button className="contact-btn">SUBMIT</button>
            </form> 
                              
                <div className="contact-img">
                    <img src={require('../../images/contactUs.jpg')} alt="The team"/>
                </div>
     </div>
                
                    <div className="contact-location" ref={navRef}>
                        <div className="contact-type">
                            <button className="contact-link-btn" onClick={showLinksbar}>
                                <AiFillEnvironment/>
                            </button>
                            <span className="contact-btn-p"><b>Address:</b> 04 Ring road Haidian Beijing, China</span>
                        </div>
                        <div className="contact-type">
                            <button className="contact-link-btn" onClick={showLinksbar}>
                                <HiPhone/>          
                            </button>
                            <span className="contact-btn-p"><b>Phone:</b>+86 18810151613</span>
                        </div>
                        <div className="contact-type">
                            <button className="contact-link-btn" onClick={showLinksbar}>
                                <HiMail/>
                            </button>  
                            <span className="contact-btn-p"><b>Email:</b> info@globalmetaroyale.com</span>
                        </div>
                        <div className="contact-type">
                            <button className="contact-link-btn" onClick={showLinksbar}>
                                <FaGlobeAsia/>
                            </button>  
                            <span className="contact-btn-p"><b>Our Website:</b> www.globalmetaroyale.com</span>
                        </div>
                                
                    </div>
               

        
    </div>
    )
}