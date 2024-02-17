const initialState = {
    count: 0
}

const counterReducer = (state = initialState, action) => {
    if (action.type === "INCREMENT"){
        return state +1
    }
    if (action.type === "DECREMENT"){
       return -1
    }
    return state
}