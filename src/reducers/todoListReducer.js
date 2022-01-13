export default (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [ ...state, action.payload];
        case 'DELETE_TODO':
            return state.filter( item => item.id !== action.payload);
        case 'UPDATE_TODO':
            return state.map( item => {
                if(item.id === action.payload.id) item.title = action.payload.title;
                return item;
            });
        case 'TOGGLE_TODO':
            return state.map( item => {
                if(item.id === action.payload) item.status = !item.status;
                return item;
            });
        default:
            return state;
    }
}

