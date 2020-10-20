import React, { useState } from 'react'
import LeftTable from './LeftTable'
import RightTable from './RightTable'
import './view.css'
function View() {
    let userTemplate = { fristName: "rohit", lastName: "kandare", email: "rohitkandare@gmail.com", phone: "", phoneType: "", dob: "" }
    let [users, setUsers] = useState([userTemplate])
    let [users1, setUsers1] = useState([])
    // const handleChange = (event) => {
    //     setUsers1(...users1, event.target.value)
    // }
    // const addUser = (event) => {
    //     event.preventDefault();
    //     setUsers((prevValue) => {
    //         return [...prevValue, users]
    //     })


    // }

    return (
        <div className="grid-container">
            <LeftTable users={users} />
            <RightTable users={users} />
        </div>

    )
}

export default View
