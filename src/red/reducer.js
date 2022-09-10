const initState = {mytodo: []};

function Reducer(state=initState, action){
    switch(action.type){
        case "ADD_TODO": return {...state, mytodo: [...state.mytodo, action.payload]};

        default: return state;
    }
}

export default Reducer;