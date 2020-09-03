import React from 'react'

class ClickMe extends React.Component {

    constructor(){
     super()
     this.state = {
          count: 0
     }
    }

     counter = () => {
         const nextCount = this.state.count + 1 
         this.setState({
             count: nextCount
         })
     }


     render(){
        return(
            <div>
            <button onClick={this.counter} >
           CLICK ME 
            </button>    <br></br>
            {this.state.count}
            </div>
        )}     
}

export default ClickMe