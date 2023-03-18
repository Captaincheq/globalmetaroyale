import React from "react";
//import './form.styles.scss';

export default function Newsletter() {
    const [formData, setformData] = React.useState(
        { 
            email: "",
            newsLetter: ""
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
        <div className="newletter"> 
        <form onSubmit={handleSubmit} className="newsletter-form">
           <input
                type="email"
                placeholder="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <input 
                type={"checkbox"} 
                id="newsLetter"
                checked={formData.newsLetter}
                onChange={handleChange}
                name="newsLetter"
            />
            <label htmlFor="newsLetter">Are you willing to receive news about our company?</label>
            <br/>

            <button>Submit</button>
        </form>

        </div>
    )
}