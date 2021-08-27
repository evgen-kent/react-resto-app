const initialState = {
    menu: [],
    error: false,
    
    
}
const reducer = (state = initialState, action) => {
    console.log(state);

    switch (action.type) {
        case 'MENU_LOADED':
            return {
                menu: action.payload,
                loading: false,
                error: state.error,
                errorStatus: state.errorStatus,
                
            };
        case 'MENU_REQUESTED':
            return {
                menu: state.menu,
                loading: true,
                error: state.error,
                errorStatus: state.errorStatus,
                
            }
        case 'MENU_ERROR':
            return {
                menu: state.menu,
                loading: false,
                error: true,
                errorStatus: action.errorStatus,
            }
            
        default:
            return state
    }

}
export default reducer;