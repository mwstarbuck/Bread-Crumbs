export const saveLocation = (lat, long) => {
    console.log("Action Fired")
    // redux thunk was used as a middleware which allowed us to access
    // dispatch in the action creators
    return dispatch => {

        fetch('http://localhost:8080/api/location', {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                latitude: lat,
                longitude: long
            })
        }).then(() => {
            dispatch({ type: 'SAVE', latitude: lat, longitude: long })
        })
    }
}

export const loadLoctions = () => {
    console.log("loading...")
    return dispatch => {

        fetch('http://localhost:8080/api/location')
            .then(response => response.json())
            .then(json => {
                dispatch({ type: 'LOAD_LOC', loc: json })
            })
    }
}