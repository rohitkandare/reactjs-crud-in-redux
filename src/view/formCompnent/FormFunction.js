
import React from 'react'


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
        type: "text"
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
function FormFunction() {

}

function validation(error, setError, data) {
    if (!data.fristName) {
        setError("Empty Frist Name !!")
        return false
    }
    if (!data.lastName) {
        setError("Empty Last Name !!")
        return false
    }
    if (!data.email) {
        setError("Empty Email !!")
        return false
    } else {
        const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailFormat.test(String(data.email).toLowerCase())) {
            setError("")
        } else {
            setError("incorrect email !!")
            return false
        }
    }
    if (!data.number) {
        setError("Empty Number !!")
        return false
    }
    else {
        const phoneno = /^\d{10}$/;
        if ((data.number.match(phoneno))) {
            setError("")
        } else {
            setError("incorrect number !!")
            return false
        }
    }
    if (!data.dob) {
        setError("Empty DOB !!")
        return false
    }
    if (!error) {
        return true
    }

}

export default FormFunction;

export { validation, formData }


