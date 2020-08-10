import React from 'react'
import {connect} from 'react-redux'
import {fetchDestinations} from '../actions/fetchDestinations'
import DestinationsList from  '../components/DestinationsList'
import DestinationsInput from '../components/DestinationsInput'
import DestinationShow from  '../components/DestinationShow'
import {Route, Switch} from 'react-router-dom'
import NavBar from '../components/NavBar'




class DestinationsContainer extends React.Component {


    componentDidMount(){
      this.props.fetchDestinations()
    }

    render(){
      return(
        <ThemeProvider theme={theme}>
          
        <div className="App"
          style={{
            backgroundImage:`url("https://images.unsplash.com/photo-1582657118090-af35eefc4e48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")`,backgroundRepeat: "no-repeat", backgroundSize: 'cover'
           }}>
        
        <Title>Gone Fishin'</Title>
        <DestinationsContainer />        
        </div>
        </ThemeProvider>
      )
    }
  }
  const mapStateToProps = state => {
    return {
        destinations: state.destinations
    } 
}
export default connect(mapStateToProps, {fetchDestinations})(DestinationsContainer);