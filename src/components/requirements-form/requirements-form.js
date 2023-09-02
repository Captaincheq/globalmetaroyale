import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Privacy from "../../routes/privacy/Privacy";
import './requirements-form.scss';

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
            gender: "",
            langauges: [],
           
        }
    );

    function handleChange(event) {
        const {name, value,type,checked} = event.target

        
        if(event.target.name === 'languages'){
            let copy = { ...formData}

            if(event.target.checked) {
                copy.langauges.push(event.target.value)
            } else {
                copy.languages = copy.langauges.filter(el => el !== event.target.value)
            }
            setformData(copy)
        }
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
        <div className="requirements">
        {/*<div className="rt-btn">
            <Link to="/requirementsInfo">Go Back</Link>
    </div>*/}
         <h1>Requirements</h1>
            <form onSubmit={handleSubmit} className="requirements-form" encType="multipart/form-data">
    
                <fieldset className="job-select">
                    {/*<legend>Job</legend>*/}
                        <label className="job-select-label">
                        Application for *
                       </label> 
                        <select name="Application for" required>
                            <option>---Choose---</option>
                            <option>Job Singer</option>
                            <option>Job Dancer</option>
                            <option>Job Violet</option>
                            <option>Job Drum</option>
                        </select>
                    
                </fieldset>
                    {/*Second Fieldset Start */}
                <fieldset className="personal-data">   
                        {/*<legend>Personal Data</legend>*/}
                            <div className="requirements-field">  
                                <div className="input-field">
                                    <label>First Name:</label>
                                    <input
                                            type="text"
                                            placeholder=""
                                            onChange={handleChange}
                                            name="firstName"
                                            value={formData.firstName}
                                            required
                                        />
                                </div>
                                <div className="input-field">
                                    <label>Last Name:</label>
                                    <input
                                        type="text"
                                        placeholder=""
                                        onChange={handleChange}
                                        name="lastName"
                                        value={formData.lastName}
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label className="input-email">Email:</label>
                                    <input
                                        type="email"
                                        placeholder="example@gmail.com"
                                        onChange={handleChange}
                                        name="email"
                                        value={formData.email}
                                        required
                                    />
                                </div>

                                <div className="contact-label">
                                    <label >Phone Number:</label>
                                    <input
                                        type="tel"
                                        placeholder="+86 *******"
                                        onChange={handleChange}
                                        name="phone"
                                        value={formData.phone}
                                        required
                                    />
                                </div>

                                <div className="input-field">
                                    <label>Nationality:</label>
                                    <input
                                            type="text"
                                            placeholder="China"
                                            onChange={handleChange}
                                            name="Nationality"
                                            value={formData.firstName}
                                            required
                                        />
                                </div>

                            </div>

                            {/* 3rd Part */}
                            <div className="requirements-third-part">  

                                <div className="input-field">
                                    <label>Gender</label> 
                                    <select name="Application for" required>
                                        <option>---Choose---</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="input-field">
                                    <label className="contact-subject-label">Age:</label>
                                    <input
                                        type="number"
                                        placeholder=""
                                        onChange={handleChange}
                                        name="age"
                                        value={formData.age}
                                        required
                                        min={20}
                                        max={60}
                                    />
                                </div>

                                <div className="input-field">
                                    <label>Passport Expiring Date:</label>
                                    <input
                                        type="date"
                                        placeholder="Enter Expiry date"
                                        onChange={handleChange}
                                        name="date"
                                        value={formData.date}
                                        required
                                    />
                                </div>


                                <div className="input-field">
                                    <label>Experience</label> 
                                    <select name="Application for" required>
                                        <option>---Choose---</option>
                                        <option>0 year</option>
                                        <option>1 year</option>
                                        <option>2 years</option>
                                        <option>3 years</option>
                                        <option>More than 4 years</option>
                                    </select>
                                </div>   
                                <div className="input-field">
                                    <label>Employment Status</label> 
                                    <select name="Application for" required>
                                        <option>---Choose---</option>
                                        <option>Full-time Employed</option>
                                        <option>Unemployed</option>
                                        <option>Part-time</option>
                                    </select>
                                </div>            
                                
                                <div className="input-field">
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
                                </div>

                                <div className="input-field">
                                    <label htmlFor="favMusic">What is your field?</label>
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
                                </div>

                            </div>

                            {/* 4th Part */}
                            <div className="requirements-forth-part">
                                    <div className="input-url">
                                        <label>Enter Your website/ youtube/company Link:</label>
                                        <input
                                            type="url"
                                            placeholder="URL - optional"
                                            onChange={handleChange}
                                            name="url"
                                            value={formData.url}
                                        />
                                    </div>

                                    <div className="input-field">
                                        <label>Upload your resume (PDF or Word):</label>
                                        <input
                                            type="file"
                                            placeholder="Choose File"
                                            onChange={handleChange}
                                            name="file"
                                            value={formData.file}
                                            required
                                        />
                                    </div>
                                    <div className="input-field">
                                        <label>Upload your medical form:</label>
                                        <input
                                            type="file"
                                            placeholder="Choose File"
                                            onChange={handleChange}
                                            name="file"
                                            value={formData.file}
                                            required
                                        />
                                    </div>
                                    <div className="input-field">
                                    <label>Other certificates:</label>
                                    <input
                                        type="file"
                                        placeholder="Choose File"
                                        onChange={handleChange}
                                        name="file"
                                        value={formData.file}
                                        required
                                    />
                                    </div>
                           </div> 
                       <div className="add-info">
                        <label>When we receive an application, we consider it for all available positions worldwide to determine the best fit. If you are interested in additional roles or offices other than what you've applied for above, you do not need to submit multiple applications. You can also indicate any further interests in the text box below.</label>
                            <p>Why you’re interested in Globalmetalroyale </p>
                            <p>How you heard about us </p>
                            <p>If you have a job now, why you’re looking for a new one </p>
                            <textarea value={formData.comments}
                            placeholder="......."
                            onChange={handleChange}
                            name="comments"
                            required
                        />
                    </div> 
                </fieldset>
  
                    
                    <h2>By pressing submit I understand my information will be used as described on this page and in the <a> <Link to="/Privacy">Privacy Policy.</Link></a> </h2>
                        <button>Submit</button>
                        {/*<button type="reset">Reset</button>*/}
                    <h2>If you have issues submitting your application, please email <a>globalmetalroyale@gmail.com</a> detailing the role you're applying for and what web browser you're using.</h2>
            </form>
        </div>
    )
    
}