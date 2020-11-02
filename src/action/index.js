const ADD_CONTACT = "ADD_CONTACT"
export const addContact =(data) =>({
    type : ADD_CONTACT,
    data : data
})

const DELETE_CONTACT = "DELETE_CONTACT"
export const deleteContact =(data) =>({
    type : DELETE_CONTACT,
    data,
})