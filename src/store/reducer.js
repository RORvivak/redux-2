const initialstate = { counter: 0, value: 0 }

const reducer = (state = initialstate, action) => {
    // if (action.type == "ADDER")
    // {
    //     return(
    //         {...state,
    //         counter: state.counter + 1}
    //     )
    // }
    

    // return state
    let value = parseInt(state.value)
    switch (action.type){
        
        

        case "ADDER":
        {
            console.log(state)
            return( {...state,
                counter: state.counter + parseInt(value)  })
        }

        case "SUB":
        {
            return( {...state,
                counter: state.counter - value})
        }

        case "MULT":
        {
            return( {...state,
                counter: state.counter * value})
        }

        case "DIV":
        {
            return( {...state,
                counter: state.counter / value})
        }

        case "SET":{
            return({...state, value: action.payload.val})
        }

        default:{
            console.log("sdsd")
            return(
                state
            )
        }
    }
}

export default reducer