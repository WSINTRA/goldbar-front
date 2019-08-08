//reducer

const initialState = {
	goldbars: [],
	filter: ""
}

function reducer( state = initialState , action){

	switch(action.type){
		case "ADD_GOLDBARS":
		return {...state, goldbars: [...state.goldbars, {bar: action.payload} ]}
		break;
		default:
		return state
	}	
}

export default reducer;


