//render gold cards in here

import React from 'react'
import GoldbarCard from './goldBarCard'

function GoldbarGrid (props) {
	return (
	<div className="grid-container">

    {props.gold.map(bar => <GoldbarCard key={bar.id} bar={bar}/> )}

	</div>
	)
}

export default GoldbarGrid;


//Create an individual card component instead of
//{props.gold.map(bar => <div key={bar.id}className="grid-item"> {bar.name} </div> )}