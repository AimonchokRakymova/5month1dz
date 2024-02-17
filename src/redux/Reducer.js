export const reducer = (state = 0, action) => {
    switch (action.type){
        case 'INCREMENT':
            return state +1
        case 'DECREMENT':
            return state -1
        case 'VREDINA':
            return state = 0
        case 'OCEAN':
            return state +10
        case 'OBNULENIA':
            return state = 0
    }
        return state
}



