import React from 'react'

function SelectTag(props) {
    const userData = props.userData
    const handleChange = props.func
    return (
        <>
            <select name="numType"
                id="select"
                value={userData}
                onChange={handleChange}
                name="phoneType"
            >
                <option value="office">Office</option>
                <option value="home">Home</option>
                <option value="persional">Persional</option>
            </select>
        </>
    )
}

export default SelectTag
