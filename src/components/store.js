import React from 'react'
import GoldbarGrid from './goldbarGrid.js'
import SearchBar from './searchBar'

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
//First task was to fetch data and set it as state, Task complete.
//This is part of the life cycle method, at the start of the lifecycle the app fetches
//initial data from the backend, only once the components have rendered.
//Next Step is to build a Card component that will render multiple 'goldbars' on the page

//now I have my cards rendered in a grid I want to implement a search bar.
//This needs to filter the cards displayed.

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
    <div>
    <GoldbarGrid gold={DisplayedCards(filter)}/>
    </div>
	</div>
	)
	}
}

export default Store;
