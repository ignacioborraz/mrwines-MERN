const initialState = {
    products: []
}

const productReducer = (state = initialState, action) => {
    //console.log(action)
    //console.log(state.products)
    switch(action.type) {
        case 'GET_PRO':
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}
export default productReducer