export const addDestination = (data, history) => {

        return (dispatch) => {
            fetch("https://gonefishinbackend.herokuapp.com/api/v1/destinations/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(destination => {
                dispatch({type: 'ADD_DESTINATIONS', payload: destination})
                history.push(`/destinations/${destination.id}`)
            })



        }
    }
