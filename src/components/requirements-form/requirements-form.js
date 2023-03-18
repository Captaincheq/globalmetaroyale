import React from "react";
import './requirements-form.module.scss';

export default function RequirementsForm() {
    const [formData, setformData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            age: "",
            phone: "",
            url: "",
            email: "", 
            comments: "", 
            isFriendly: false,
            file: "",
            employment: "",
            favColor: "",
            favMusic: "",
            date: "",
            gender: ""
           
        }
    )

    function handleChange(event) {
        const {name,number, value,type,checked} = event.target
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
        <form onSubmit={handleSubmit} className="requirements-form" encType="multipart/form-data">
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                required
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                required
            />
            <input
                type="date"
                placeholder="date"
                onChange={handleChange}
                name="date"
                value={formData.date}
                required
            />
            <input
                type="number"
                placeholder="Your age"
                onChange={handleChange}
                name="age"
                value={formData.age}
                required
                min={20}
                max={60}
            />
            <input
                type="tel"
                placeholder="Phone Number"
                onChange={handleChange}
                name="phone"
                value={formData.phone}
                required
            />
            <input
                type="url"
                placeholder="URL - optional"
                onChange={handleChange}
                name="url"
                value={formData.url}
            />
            <input
                type="email"
                placeholder="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                required
            />
                <textarea value={formData.comments}
                placeholder="comments"
                onChange={handleChange}
                name="comments"
                required
            />
            <input 
                type={"checkbox"} 
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br/>
            <br/>

            <input
                type="file"
                placeholder="Choose File"
                onChange={handleChange}
                name="file"
                value={formData.file}
                required
            />
            <fieldset>
                <legend>Current employment status</legend>

                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    onChange={handleChange}
                    checked={formData.employment === "unemployed"}
                    className="req"
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br/>
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    onChange={handleChange}
                    checked={formData.employment === "part-time"}
                />
                <label htmlFor="part-time">Part-time</label>
                <br/>
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    onChange={handleChange}
                    checked={formData.employment === "full-time"}
                />
                <label htmlFor="full-time">Full-time</label>
                <br/>          
            </fieldset>
            <br/>

            <fieldset>
            <legend>Gender</legend>

            <input 
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={formData.gender === "male"}
                className="req"
            />
            <label htmlFor="male">Male</label>
            <br/>
            <input 
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={formData.gender === "female"}
            />
            <label htmlFor="female">Female</label>
            <br/>
            <input 
                type="radio"
                id="other"
                name="gender"
                value="other"
                onChange={handleChange}
                checked={formData.gender === "other"}
            />
            <label htmlFor="other">Other</label>
            <br/>          
        </fieldset>
        <br/>

            <label htmlFor="favColor">What is your favorite color?</label>
            <br/>
            <select 
                id="favColor"
                value={formData.favColor}
                name="favColor"
                onChange={handleChange}
                required
            >
                <option value="">-- Choose --</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="white">White</option>
                <option value="blue">Blue</option>
                <option value="violet">Violet</option>
                <option value="indigo">Indigo</option>
            </select>

            <br/>
            <br/>
            <label htmlFor="favMusic">What is your favorite color?</label>
            <select 
                id="favMusic"
                value={formData.favMusic}
                name="favMusic"
                onChange={handleChange}
                required
            >
                <option value="">-- Choose --</option>
                <option value="singer">Singer</option>
                <option value="dance">Traditional dance</option>
                <option value="dj">DJ</option>
                <option value="piano">Piano</option>
                <option value="violet_player">Violet</option>
                <option value="drama">Drama</option>
            </select>

            <button>Submit</button>
            <button type="reset">Reset</button>
        </form>
    )
}