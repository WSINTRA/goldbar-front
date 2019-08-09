//reducer

const initialState = {
	goldbars: [],
	filter: "",
	vault: [],
	show: false,
}

const checkIfobjectExists = (obj, array) => {
  const test = array.filter(el => el.id === obj.id)
  if (test[0] === obj){
  	return true
  }
  else {return false}
}

const removeFromVault = (obj, array) => {
   const test = array.filter(el => el.id !== obj.id)
   return test
}

function reducer( state = initialState , action){

	switch(action.type){
		case "ADD_GOLDBARS":
		return {...state, goldbars: action.payload }
		case "CHANGE_FILTER":
		return {...state, filter: action.payload }
		case "ADD_TO_VAULT":
		if(checkIfobjectExists(action.payload, state.vault)){
			return {...state}
		}
		else { return {...state, vault: [...state.vault, action.payload] }}
	    case "REMOVE_FR_VAULT":
	    return {...state, vault: removeFromVault(action.payload, state.vault)}
	    case "SHOW_VAULT":
	    return {...state, show: action.payload}
	    case "HIDE_VAULT":
	    return {...state, show: action.payload}
		default:
		return state
	}	
}

export default reducer;


