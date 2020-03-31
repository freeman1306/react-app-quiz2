

const initialState = {
    counter: 1000
  }
  
  export default function counter1(state = initialState, action) {
    switch (action.type) {
      case "ADD":
        return {
          counter: state.counter + 1
        }
        case "REMOVE":
          return {
            counter: state.counter - 1
          }
          case "ADD_NUMBER":
            return {
              counter: state.counter + action.payload
            }
            case "REM_NUMBER":
              return {
                counter: state.counter - action.payload
              }
      
      default :  return {
        counter: state.counter 
      }
  }
    
  // return state
  }