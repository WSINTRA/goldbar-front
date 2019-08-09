import React from 'react'
import { connect } from 'react-redux'

function goldBarCard (props) {
	let { bar } = props
    
	return (

	<div className="grid-item">
    <div className="card">
	<h1> {bar.name} </h1>
    <p> {bar.details} </p>
    <h2> {bar.value}</h2>
    <div className="btn btn--white" onClick={()=> props.addToVault(bar) }>Add-to-Vault</div>
    </div>
	</div>
	)
}


function mdp(dispatch){
    return { 
        addToVault: (card)=>{
            dispatch({type:"ADD_TO_VAULT", payload: card})
        }
    }
}



export default connect(null,mdp)(goldBarCard);