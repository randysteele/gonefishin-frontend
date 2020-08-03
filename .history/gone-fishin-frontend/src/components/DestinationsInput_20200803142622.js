import React from 'react'
import {connect} from 'react-redux'


class DestinationsInput extends React.Component {

    render() {
        return (
            <div>
                <form > 
                    <input type="text">


                    </input>


                </form>
            </div>


// t.string "name"
// t.string "city"
// t.string "state"
// t.string "description"

        )
    }
}

export default connect()(DestinationsInput)