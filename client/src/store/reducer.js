const initialState = {
    latitude: '',
    longitude: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE':
            return {
                ...state,
                latitude: action.latitude,
                longitude: action.longitude
            }
    }
    return state
}
export default reducer