import React from 'react';
import { connect } from 'react-redux'

function vault(props) {

		return (

			<div className="vault">
			<header>NAMES OF CARDS IN THE VAULT - INCLUDING DUPLICATES</header>
		    {props.vault.map(card => {
		    	return (
		    		<div key={card.id} className="grid-item"> 
		    		<h1>{card.name}</h1>   
		    		 <p> {card.details} </p>    
		    		<div className="btn btn--black" onClick={()=>{props.removeFromVault(card)}}>REMOVE</div>
		    		</div>
		    		)
		    })}
		    
			
				
			</div>
		);
}

function msp(store){
return {vault: store.vault}
}
function mdp(dispatch){
	return {
		removeFromVault: (object)=> {
			dispatch({type:"REMOVE_FR_VAULT", payload: object})
		}
	}
}

export default connect(msp,mdp)(vault);