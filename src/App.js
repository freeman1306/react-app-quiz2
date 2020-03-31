import React, { Component } from 'react'
import {connect} from 'react-redux'
import './App.scss'
import Counter from './Counter'


class App extends Component { 


  // updateCounter(value) {
  //   this.setState({
  //     counter: this.state.counter + value
  //   })
  // }

  render() {
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.addCount}>Добавить 1</button>
          <button onClick={this.props.removeCount}>Вычесть 1</button>
        </div>

        <div className="Actions">
          <button onClick={() => this.props.onAdNumber(15)}>Добавить 15</button>
          <button onClick={() => this.props.onMinNumber(17)}>Вычесть 17</button>
        </div>
        
        <Counter />
      </div>
    )
  }
}




function mapDispatchToProps(dispatch) {
  return {
    addCount: () => {
      dispatch({type: "ADD"})
    },
    removeCount: () => {
      dispatch({type: "REMOVE"})
    },
    onAdNumber: number => dispatch({ type: "ADD_NUMBER", payload: number }),
    onMinNumber: number => dispatch({ type: "REM_NUMBER", payload: number })
  }
 }

function mapStateToProps(state) {
 return {counter: state.counter1.counter}
}



export default connect(mapStateToProps, mapDispatchToProps)(App)
