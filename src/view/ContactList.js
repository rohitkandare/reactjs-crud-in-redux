import React from 'react'
import { connect } from 'react-redux'
function ContactList({ handleUpdate, handleDelete, user }) {
    return (
        <div className="right">
            <div className="tableHeading">
                <p>CONTACTS</p>
            </div>
            <table>
                <tr>
                    <th>S.NO</th>
                    <th>FRIST NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>NUMBER</th>
                    <th>NUMBER TYPE</th>
                    <th>DOB</th>
                    <th>ACTION</th>
                </tr>
                {
                    user.map((user, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.number}</td>
                            <td>{user.phoneType}</td>
                            <td>{user.dob}</td>
                            <tr>
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
const mapStateToprops = (state) => ({
    user: state.contact.data
})
export default connect(mapStateToprops)(ContactList)