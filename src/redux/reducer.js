//reducer

const initialState = {
	goldbars: [],
	filter: ""
}

function reducer( state = initialState , action){

	switch(action.type){
		case "ADD_GOLDBARS":
		return {...state, goldbars: action.payload }
		case "CHANGE_FILTER":
		return {...state, filter: action.payload }
		default:
		return state
	}	
}

export default reducer;


