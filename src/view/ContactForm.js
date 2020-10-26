import React, { useState} from 'react'
import InputTag from './formCompnent/InputTag';
import SelectTag from './formCompnent/SelectTag';
import { formData, validation } from './formCompnent/FormFunction'

function ContactForm({ setUserData, userData, data, setData, btn, setBtn }) {
    const [error, setError] = useState()
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

        if (validation(error, setError, data)) {
            const datass = [...userData, data]
            setUserData(
                datass
            )
        }

    }

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
            <p>{error}</p>
        </div>
    )
}

export default ContactForm
