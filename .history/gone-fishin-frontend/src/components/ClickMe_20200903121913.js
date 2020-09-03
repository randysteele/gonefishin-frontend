import React from 'react'

class ClickMe extends React.Component {

    constructor(){
     super()
     this.state = {
          count: 0,
          helloWorld: "HELLO WORLD"
     }
    }

     counter = () => {
         const nextCount = this.state.count + 1 
         this.setState({
             count: nextCount
         })
     }
     
     hello = () => {
        const excitedHello = this.state.helloWorld + !
        this.setState({
            helloWorld: excitedHello
        })
     }


     render(){
        return(
            <div>
            <button onClick={this.counter} >
           CLICK ME {this.state.count}
            </button>    
            <p onClick={this.hello}>HELLO WORLD {this.state.hello}</p>
         </div>  
            
        )}     
}

export default ClickMe