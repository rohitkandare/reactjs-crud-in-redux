import React from 'react'


function InputTag(props) {
    const userData = props.userData
    const formData = props.formData
    const handleChange = props.fun
    console.log(userData)


    return (
        <>
            <input
                type={formData.type}
                name={formData.name}
                placeholder={formData.placeholder}
                value={userData}
                onChange={handleChange}
            />
        </>
    )
}

export default InputTag
