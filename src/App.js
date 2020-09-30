import React, { Component } from 'react'
import {connect} from 'react-redux'
import './App.css'
import Counter from './Counter'
import { add, sub, addNumber, asyncAdd } from './redux/actions/actions'
import { number } from 'prop-types'


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
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>

        <div className="Actions">
          <button onClick={() => this.props.onAdNumber(15)}>Добавить 15</button>
          <button onClick={() => this.props.onAdNumber(17)}>Вычесть 17</button>
        </div>
        
        <div className="Actions">
          <button onClick={() => this.props.onAsyncAdd(100)}>Async</button>

        </div>

        <Counter />
      </div>
    )
  }
}




function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAdNumber: number => dispatch(addNumber(number)),
    onAsyncAdd: (number) => dispatch(asyncAdd(number))
   
  }
 }

function mapStateToProps(state) {
 return {counter: state.counter1.counter}
}



export default connect(mapStateToProps, mapDispatchToProps)(App)
