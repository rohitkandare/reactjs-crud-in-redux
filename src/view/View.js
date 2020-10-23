import React, { useState } from 'react'
import LeftForm from './LeftForm'
import RightTable from './RightTable'
import './view.css'


function View() {

    const [userData, setUserData] = useState([])
    const [data, setData] = useState([])
    const [btn, setBtn] = useState(true)

    return (
        <div className="grid-container">
            <LeftForm setUserData={setUserData} userData={userData} data={data} setData={setData} btn={btn} setBtn={setBtn} />
            <RightTable users={userData} setUserData={setUserData} data={data} setData={setData} btn={btn} setBtn={setBtn} />
        </div>

    )
}


export default View
