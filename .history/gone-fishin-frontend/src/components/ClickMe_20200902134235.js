import React from 'react'

class ClickMe extends React.Component {

     state = {
         count: 0
     }

     counter = () => {
         const nextCount = this.state.count + 1 
         this.setState({
             count: nextCount
         })
     }
        
    //  onClick = (event) => {
    //      this.setState({
    //          count: this.state.count + this.state.count + 1 
    //      })
    //  }
     

    render(){
        return(
            <div>Click Me onClick={this.onClick}</div>
        )       
    } 
    
}

export default ClickMe