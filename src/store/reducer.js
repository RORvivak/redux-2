const initialstate = { counter: 0 }

const reducer = (state = initialstate, action) => {
    // if (action.type == "ADDER")
    // {
    //     return(
    //         {...state,
    //         counter: state.counter + 1}
    //     )
    // }
    

    // return state

    switch (action.type){

        case "ADDER":
        {
            return( {...state,
                counter: state.counter + 1})
        }

        case "SUB":
        {
            return( {...state,
                counter: state.counter - 1})
        }

        case "MULT":
        {
            return( {...state,
                counter: state.counter * 2})
        }

        case "DIV":
        {
            return( {...state,
                counter: state.counter / 2})
        }

        default:{
            return(
                state
            )
        }
    }
}

export default reducer