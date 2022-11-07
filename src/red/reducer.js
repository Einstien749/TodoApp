const initState = {mytodo: []};

function Reducer(state=initState, action){
    switch(action.type){
        case "ADD_TODO": return {...state, mytodo: [...state.mytodo, action.payload]};

        case "DELETE_TODO": return {...state, mytodo: state.mytodo.filter((item) => {return state.mytodo.indexOf(item) !== action.payload;})};

        default: return state;
    }
}

export default Reducer;