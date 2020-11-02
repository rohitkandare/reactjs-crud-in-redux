import React, { useState } from 'react'
import ContactForm from './ContactForm'
import Contactlist from './ContactList'
import './view.css'
import { validation } from './formCompnent/FormFunction'
import { addContact } from '../action/index'
import { useDispatch } from "react-redux";

function View() {

    const [userData, setUserData] = useState([])
    const [data, setData] = useState([])
    const [error, setError] = useState()
    const [newArr, setnewArr] = useState([])
    const dispatch = useDispatch();
    const handleChange = (event) => {
        const { name, value } = event.target
        setData({
            ...data,
            [name]: value

        })
    }
    const addUser = (event) => {
        event.preventDefault()
        if (validation(error, setError, data)) {
            const datass = [...userData, data]
            dispatch(addContact(datass))
        }

    }
    function handleUpdate(e, itemToBeUpdate) {
        e.preventDefault()
        userData.filter((value, index) => {
            if (index === itemToBeUpdate) {
                setData(value)
            }
            if (index !== itemToBeUpdate) {
                newArr.push(value)
            }
        })
        setUserData(newArr)
        setnewArr([])
    }
    function handleDelete(e, itemToBeDeleted) {
        e.preventDefault()
        userData.filter((value, index) => {
            if (index !== itemToBeDeleted) {
                newArr.push(value)
            }
        })
        setUserData(newArr)
        setnewArr([])
    }
    return (
        <div className="grid-container">
            <ContactForm data={data} error={error} handleChange={handleChange} addUser={addUser} />
            <Contactlist handleUpdate={handleUpdate} handleDelete={handleDelete} />
        </div>

    )
}


export default View
