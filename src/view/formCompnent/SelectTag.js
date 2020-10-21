import React from 'react'

function SelectTag(props) {
    const users = props.data
    return (
        <>
            <select name="numType"
                id="select"
                value={users}
            >
                <option value="office">Office</option>
                <option value="home">Home</option>
                <option value="persional">Persional</option>
            </select>
        </>
    )
}

export default SelectTag
