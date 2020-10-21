import React from 'react'

function RightTable(props) {
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
                // props.users.map((user, index) => (

                //     <tr key={index}>
                //         <td>{index}</td>
                //         <td>{user.fristName}</td>
                //         <td>{user.lastName}</td>
                //         <td>{user.email}</td>
                //         <tr>
                //             <td>UPDATE</td>
                //             <td>VIEW</td>
                //             <td>DELETE</td>
                //         </tr>
                //     </tr>
                // ))
            }
          
        </table>
    </div>
        
    )
}

export default RightTable
