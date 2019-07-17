const initialstate = { counter: 0 }

const reducer = (state = initialstate, action) => {
    if (action.type == "ADDER")
    {
        return(
            {...state,
            counter: state.counter + 1}
        )
    }

    return state
}

export default reducer