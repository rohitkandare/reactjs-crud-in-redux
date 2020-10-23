import React, { useState, useEffect } from 'react'
import InputTag from './formCompnent/InputTag';
import SelectTag from './formCompnent/SelectTag';

function LeftForm({ setUserData, userData, data, setData, btn, setBtn }) {

    const handleChange = (event) => {
        const { name, value } = event.target
        setData({
            ...data,
            [name]: value

        })
    }
    function handleClickRecord(e) {
        setData([])
        setBtn(true)

    }
    const addUser = (event) => {
        event.preventDefault()
        console.log(data)
        const datass = [...userData, data]
        setUserData(
            datass
        )
    }
    const formData = [
        {
            name: "fristName",
            placeholder: "Enter Frist Name",
            type: "text"
        },
        {
            name: "lastName",
            placeholder: "Enter Last Name",
            type: "text"
        },
        {
            name: "email",
            placeholder: "Enter Email",
            type: "email"
        },
        {
            name: "number",
            placeholder: "Enter A Number",
            type: "number"
        },
        {
            name: "dob",
            placeholder: "Enter A DOB",
            type: "date"
        }
    ]
    return (
        <div className="left">
            <div className="tableHeading">
                <p>CREATE</p>
            </div>
            <form onSubmit={addUser}>
                <ul className="form-style-1">
                    <li>
                        <label>Full Name</label>
                        <InputTag formData={formData[0]} userData={data.fristName} func={handleChange} />
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

                        {btn ? <input type="submit" /> : <button onClick={(e) => handleClickRecord(e)}>CREATE NEW RECORD</button>}
                    </li>
                </ul>
            </form>

        </div>
    )
}

export default LeftForm
