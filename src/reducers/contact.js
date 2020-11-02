const initialState = {
    data:[]
}

const contacts = (state = initialState, action) => {
    console.log(state.data)
    switch (action.type) {
        case 'ADD_CONTACT':
            return {...state, ...state.data, state:{data:action.data}}
        case 'DELETE_CONTACT':
            return {}
        default:
            return { state }
    }
}


export default contacts