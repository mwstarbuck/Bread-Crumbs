const initialState = {
    latitude: '',
    longitude: '',
    locations: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE':
            return {
                ...state,
                latitude: action.latitude,
                longitude: action.longitude
            }
        case 'LOAD_LOC':
            return {
                ...state,
                locations: action.loc
            }
    }

    return state
}
export default reducer