import React, { useState } from 'react'

function RightTable(props) {

    const [newArr, setnewArr] = useState([])
    function handleDelete(e, itemToBeDeleted) {
        e.preventDefault()
        props.users.map((user, i) => {
            if (i != itemToBeDeleted) {
                newArr.push(user)
            }
        })
        props.setUserData(newArr)
        setnewArr([])
    }
    function handleUpdate(e, itemToBeUpdate) {
        e.preventDefault()
        props.users.map((user, i) => {
            if (i == itemToBeUpdate) {
                props.setData(user)
            }
            if (i != itemToBeUpdate) {
                newArr.push(user)
            }
        })
        props.setUserData(newArr)
        setnewArr([])
        props.setBtn(true)
    }
    function handleView(e, itemToBeUpdate) {
        e.preventDefault()
        props.users.map((user, i) => {
            if (i == itemToBeUpdate) {
                props.setData(user)
            }
        })
        setnewArr([])
        props.setBtn(false)
    }
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
                    props.users.map((user, index) => (

                        <tr key={index}>
                            <td>{index}</td>
                            <td>{user.fristName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <tr>
                                <td><button onClick={(e) => handleView(e, index)}>VIEW</button></td>
                                <td><button onClick={(e) => handleUpdate(e, index)}>UPDATE</button></td>
                                <td><button onClick={(e) => handleDelete(e, index)}>DELETE</button></td>
                            </tr>
                        </tr>
                    ))
                }

            </table>
        </div>

    )
}

export default RightTable
