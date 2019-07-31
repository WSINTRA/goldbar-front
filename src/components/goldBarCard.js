import React from 'react'

function goldBarCard (props) {
	let { bar } = props
	return (

	<div className="grid-item">
    <div className="card">
	<h1> {bar.name} </h1>
    <p> {bar.details} </p>
    <h2> {bar.value}</h2>
    <div className="btn btn--white">Show</div>
    <div className="btn btn--black">Hide</div>
    </div>
	</div>
	)
}

export default goldBarCard;