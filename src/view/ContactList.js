import React, { useState } from 'react'
import {handleDelete , handleUpdate, handleView} from './formCompnent/FormFunction'

function ContactList({data,setUserData,setData,users,setBtn}) {
    const [newArr, setnewArr] = useState([])
    return (
        <div className="right">
            <div className="tableHeading">
                <p>CONTACT</p>
            </div>
            <table>
                <tr>
                    <th>S.NO</th>
                    <th>FRIST NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>ACTION</th>
                </tr>
                {
                   users.map((user, index) => (

                        <tr key={index}>
                            <td>{index}</td>
                            <td>{user.fristName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <tr>
                                <td><button onClick={(e) => handleView(e, index, users, setData, setnewArr, setBtn)}>VIEW</button></td>
                                <td><button onClick={(e) => handleUpdate(e, index ,users,setData,newArr,setnewArr,setUserData,setnewArr, setBtn,setBtn)}>UPDATE</button></td>
                                <td><button onClick={(e) => handleDelete(e, index, users, newArr, setUserData, setnewArr)}>DELETE</button></td>
                            </tr>
                        </tr>
                    ))
                }

            </table>
        </div>

    )
}

export default ContactList