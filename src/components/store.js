import React from 'react'
import GoldbarGrid from './goldbarGrid.js'
import SearchBar from './searchBar'
import Vault from './vault'
import { connect } from 'react-redux'

class Store extends React.Component {

// state = {
// 	goldbars: [],
// 	filter: ""
// }

componentDidMount() {
	let url = 'http://localhost:3050/goldbars'
	fetch(url).then(res => res.json())
	.then(barData => {
		this.props.addGoldBars(barData)
		}
	)
}

render () {

const FilterCards = (filter) => {
	this.props.changeFilter(filter)
	// this.setState({
	// 	filter: filter
	// })
}
	
const DisplayedCards = (searchTerm) =>{
	let goldCardsCopy = [...this.props.goldbars]
	const Cards = goldCardsCopy.filter(obj => obj.name.toLowerCase().includes( searchTerm.toLowerCase() ) )
    return Cards
}
	let { filter } = this.props
	return (
	<div>
	<SearchBar filter={filter} controlFunction={FilterCards}/>
	<Vault/>
    <div>
    <GoldbarGrid gold={DisplayedCards(filter)}/>
    </div>
	</div>
	)
	}
}

//write a map state to prpos function

function mapStateToProps(state){
	return {goldbars: state.goldbars, filter: state.filter}
}
//write a function to write to state
function mapDispatchToProps(dispatch){
    return { 
    	addToVault: (card)=>{
    		dispatch({type:"ADD_TO_VAULT", payload: card})
    	},
    	changeFilter: (filter)=>{
    		dispatch({type:"CHANGE_FILTER", payload: filter})
    	},
    	addGoldBars: (goldbars)=>{
      		dispatch( {type:"ADD_GOLDBARS", payload: goldbars} )
    }}
}

export default connect(mapStateToProps,mapDispatchToProps)(Store);
