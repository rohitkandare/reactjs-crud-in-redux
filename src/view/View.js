import React, { useState } from 'react'
import ContactForm from './ContactForm'
import Contactlist from './ContactList'
import './view.css'
import { validation } from './formCompnent/FormFunction'
import { addContact, deleteContact, updateContact } from '../action/index'
import { connect, useDispatch } from "react-redux";

function View({ user }) {
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
            dispatch(addContact(data))
        }

    }
    function handleUpdate(e, itemToBeUpdate) {
        e.preventDefault()
        user.filter((value, index) => {
            if (index === itemToBeUpdate) {
                setData(value)
            }
            if (index !== itemToBeUpdate) {
                newArr.push(value)
            }
        })
        dispatch(updateContact(newArr))
        setnewArr([])
    }
    function handleDelete(e, itemToBeDeleted) {
        e.preventDefault()
        user.filter((value, index) => {
            if (index !== itemToBeDeleted) {
                newArr.push(value)
            }
        })
        dispatch(deleteContact(newArr))
        setnewArr([])
    }
    return (
        <div className="grid-container">
            <ContactForm data={data} error={error} handleChange={handleChange} addUser={addUser} />
            <Contactlist handleUpdate={handleUpdate} handleDelete={handleDelete} />
        </div>

    )
}

const mapStateToprops = (state) => ({
    user: state.contact.data
})

export default connect(mapStateToprops)(View)
