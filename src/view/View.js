import React from 'react'
import LeftForm from './LeftForm'
import RightTable from './RightTable'
import './view.css'
function View() {
    const userTemplate =
    {
        fristName: "",
        lastName: "",
        email: "",
        phone: "", 
        phoneType: "",
        dob: ""
    }
    return (
        <div className="grid-container">
            <LeftForm users={userTemplate} />
            <RightTable users={userTemplate} />
        </div>
    
    )
}


export default View
 