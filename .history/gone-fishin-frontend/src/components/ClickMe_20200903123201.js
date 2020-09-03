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
        //  const nextCount = this.state.count + 1 
        //  this.setState({
        //      count: nextCount
        //  })

        console.log('a')

        fetch("http://localhost:3000/api/v1/destinations/")
            .then(resp => {
                console.log('b')
                return resp.json();
            })
            .then(data => console.log('c', data))
            .catch(errors => console.log('d', errors))

        for(let i = 0; i < 5000; i++) {
            console.log('e')
        }    

        // a, e(5000), b, c
     }
     
     hello = () => {
        const excitedHello = this.state.helloWorld + "!"
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
            <p onClick={this.hello}> {this.state.helloWorld}</p>
         </div>              
        )}     
}

export default ClickMe