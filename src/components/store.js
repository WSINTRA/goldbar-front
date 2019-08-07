import React from 'react'
import GoldbarGrid from './goldbarGrid.js'
import SearchBar from './searchBar'
import Vault from './vault'

class Store extends React.Component {

state = {
	goldbars: [],
	filter: ""
}

componentDidMount() {
	let url = 'http://localhost:3050/goldbars'
	
	fetch(url).then(res => res.json())
	.then(barData => this.setState({
		goldbars:barData
	}))

}


render () {

const FilterCards = (filter) => {
	this.setState({
		filter: filter
	})
}
	
const DisplayedCards = (searchTerm) =>{
	let goldCardsCopy = [...this.state.goldbars]
	const Cards = goldCardsCopy.filter(obj => obj.name.toLowerCase().includes( searchTerm.toLowerCase() ) )
    return Cards
}
	let { filter } = this.state
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

export default Store;
