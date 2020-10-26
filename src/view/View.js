import React, { useState } from 'react'
import ContactForm from './ContactForm'
import  Contactlist from './ContactList'
import './view.css'


function View() {

    const [userData, setUserData] = useState([])
    const [data, setData] = useState([])
    const [btn, setBtn] = useState(true)
    const [error, setError] = useState()

    return (
        <div className="grid-container">
            <ContactForm setUserData={setUserData} userData={userData} data={data} setData={setData} btn={btn} setBtn={setBtn} error={error} setError={setError}/>
            < Contactlist users={userData} setUserData={setUserData} data={data} setData={setData} btn={btn} setBtn={setBtn} />
           
        </div>

    )
}


export default View
