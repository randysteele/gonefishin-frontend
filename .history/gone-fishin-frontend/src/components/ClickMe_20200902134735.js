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
        
    //  onClick = (event) => {
    //      this.setState({
    //          count: this.state.count + this.state.count + 1 
    //      })
    //  }
     

    render(){
        return(
            <div onClick={this.counter}>
            {this.state.count}
            </div>    
        )       
    } 
    
}

export default ClickMe