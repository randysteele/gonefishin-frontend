import React from 'react'

class ClickMe extends React.Component {

     state = {
         count: 0
     }
        
     onClick = (event) => {
         this.setState({
             count: this.state.count + this.state.count + 1 
         })
     }
     

    render(){
        return(
            <button>Click Me onClick={this.onClick}</button>
        )       
    } 
    
}

export default ClickMe