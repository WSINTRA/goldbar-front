import React from 'react'

function goldBarCard (props) {
	let { bar } = props
	return (
	<div className="grid-item">

	<h1> {bar.name} </h1>
    <p> {bar.details} </p>
    <h2> {bar.value}</h2>
	</div>
	)
}

export default goldBarCard;