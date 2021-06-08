const cart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload]
        case 'REMOVE_FROM_CART':
            
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ]

        case 'EMPTY_CART': 
            return [];    
        default:
            return state    
    }
}

export default cart;