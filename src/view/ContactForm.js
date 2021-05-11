import React, { useState } from 'react'
import InputTag from './formCompnent/InputTag';
import SelectTag from './formCompnent/SelectTag';
import { formData } from './formCompnent/FormFunction'

function ContactForm({ data, handleChange, addUser, error }) {

    return (
        <div className="left">
            <div className="tableHeading">
                <p>FORM</p>
            </div>
            <form onSubmit={addUser}>
                <ul className="form-style-1">
                    <li>
                        <label>Full Name</label>
                        <InputTag formData={formData[0]} userData={data.firstName} func={handleChange} />
                        <InputTag formData={formData[1]} userData={data.lastName} func={handleChange} />
                    </li>
                    <li>
                        <label>Email </label>
                        <InputTag formData={formData[2]} userData={data.email} func={handleChange} />
                    </li>
                    <li>
                        <label>Number</label>
                        <InputTag formData={formData[3]} userData={data.number} func={handleChange} />
                        <SelectTag userData={data.phoneType} func={handleChange} />
                    </li>
                    <li>
                        <label>DOB </label>
                        <InputTag formData={formData[4]} userData={data.dob} func={handleChange} />
                    </li>
                    <li>
                        <input type="submit" />
                    </li>
                </ul>
            </form>
            <p>{error}</p>
        </div>
    )
}

export default ContactForm
