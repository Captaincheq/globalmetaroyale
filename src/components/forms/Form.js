import React from "react";
import Newsletter from "../newsletter/newsletter";
import './form.styles.scss';

export default function Form() {
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

    return (
        <div className="contact"> 
        <form onSubmit={handleSubmit} className="contact-form">
            <input
                type="text"
                placeholder="Name"
                onChange={handleChange}
                name="name"
                value={formData.name}
                required
            />
            <input
                type="email"
                placeholder="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                required
            />
            <textarea 
                value={formData.subject}
                placeholder="Subject"
                onChange={handleChange}
                name="subject"
                required
            />
            <textarea 
                value={formData.message}
                placeholder="Your Message"
                onChange={handleChange}
                name="message"
                required
            />
           

            <button>Submit</button>
        </form>
            <Newsletter/>
        <div>
        <h1>food</h1>
        </div>

        </div>
    )
}