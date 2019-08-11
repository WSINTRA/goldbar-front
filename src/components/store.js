import React from 'react'
import GoldbarGrid from './goldbarGrid.js'
import SearchBar from './searchBar'
import Vault from './vault'
import Overlay from './overlay'
import { connect } from 'react-redux'

//Styles can be changed in state for more custom splash
class Store extends React.Component {

state = {
	screenFill:{
	    height: "6rem",
		width: "6rem",
		position: "fixed",
		"zIndex": 1000,
		transform: "scale(80)",
	},
	screenParent : {
		display: "block",
		height: "100%",
	},
	screenContent : {
	    height: "100vh",
		position: "fixed",
		top:0,
		right: 0,
		"zIndex": 1500,
		width: "100%",
		opacity: 1
	},
	screenGrowth:{
	    // backgroundImage: "linear-gradient(to bottom right, rgba(#A4EAFF, 0.8) 73%, rgba(#D9EEFF, 0.9))",
	    padding: "8.5rem",
	    border:"dashed",
        "borderColor": "black",
		position: "absolute",
		top:"50%",
		left: "50%",
		transform: "translate(-50%,-50%)",
		"listStyle": "none",
		"textAlign": "left",
		width: "50%",
		"fontSize": "2rem",
		visibility: "visible",
		opacity: 1,
        animation: "fade 1.3s linear",
},
}

componentDidMount() {
	let url = 'http://localhost:3050/goldbars'
	fetch(url).then(res => res.json())
	.then(barData => {
		this.props.addGoldBars(barData)
		}
	)
}

render () {

const styleChange = (style)=> {
	this.setState({
	screenParent : {
		transition: "opacity 0.5s ease-out",	    
		opacity: 0, 
	    height: 0,
	    overflow: "hidden",
	    "zIndex": -1,

		},
	screenContent : {
	    // height: "0",
	    position: "inherit",
		// transition: "height 1s ease-out",	
		visibility: "hidden",
		transition: "visibility 0.1s ease-out,  opacity 0.9s ease-in",
	},
	screenFill:{
		// height: "0",
		"backgroundColor": "rgba(#FC4168, 0.9)",
		// position: "fixed",
		// visibility: "hidden",
		// transition: "visibility 2s ease-out,  opacity 0.9s ease-in",
	},
	screenGrowth:{
		// backgroundImage: "linear-gradient(to bottom right, rgba(#A4EAFF, 0.8) 73%, rgba(#D9EEFF, 0.9))",
	    // "backgroundColor": "rgba(#FC4168, 0.9)",
	    padding: "8.5rem",
	    border:"dashed",
        "borderColor": "black",
		position: "absolute",
		top:"50%",
		left:"50%",
		transform: "translate(-50%, -50%)",
		"listStyle": "none",
		"textAlign": "left",
		width: "50%",
		
		"fontSize": "2rem",
		visibility: "hidden",
		opacity: 0.6,
        animation: "fade 1.3s linear",
        transition: "visibility 0.5s ease-out,  opacity 0.9s ease-in",
		
	}
	})
}



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

	<Overlay 

	styleChange={styleChange} 
	screenParent={this.state.screenParent}
    screenContent={this.state.screenContent}
	screenGrowth={this.state.screenGrowth}
	screenFill={this.state.screenFill}/>
	
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
