import React from 'react'

function LeftTable(props) {
    let users = props.users
    const addUser = (event) => {
        event.preventDefault();
        
    }        
    return (
        <div className="left">
            <div className="tableHeading">
                <p>CREATE</p>
            </div>
            <form onSubmit={addUser}>
                <ul className="form-style-1">
                    <li><label>Full Name</label><input type="text" value={users.fristName} placeholder="Frist name" /> <input type="text" name="lastName" placeholder="Last"
                        //onChange={handleChange}
                        value={users.lastName} /></li>
                    <li>
                        <label>Email </label>
                        <input
                            type="email"
                            name="email"
                            //  onChange={handleChange}
                            value={users.email}
                        />
                    </li>
                    <li>
                        <label>Number</label>
                        <input
                            type="number"
                            name="number"
                            //  onChange={handleChange}
                            value={users.number}
                        />  <select name="numType"
                            id="select"
                            //onChange={handleChange}
                            value={users.numType}
                        >
                            <option value="office">Office</option>
                            <option value="home">Home</option>
                            <option value="persional">Persional</option>
                        </select>
                    </li>
                    <li>
                        <label>DOB </label>
                        <input
                            type="date"
                            name="dob"
                            //    onChange={handleChange}
                            value={users.dob}
                        />
                    </li>
                    <li>
                        <input type="submit" />
                    </li>
                </ul>

            </form>

        </div>
    )
}

export default LeftTable
