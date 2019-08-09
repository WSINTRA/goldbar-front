import React from 'react';
import { connect } from 'react-redux'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

function vault(props) {

		return (

			<div className="vault">
			<header>NAMES OF CARDS IN THE VAULT - NO DUPLICATES</header>
			<div className="btn btn--white" onClick={()=>props.showVault(true)}>Show</div>
			
			
    		<div className="btn btn--black" onClick={()=>props.showVault(false)}>Hide</div>
    	
		    {props.show ? 
		    	<TransitionGroup className="vault-list">
		    	{props.vault.map(card => { return (
		    		<CSSTransition
		              key={card.id}
		              timeout={500}
		              classNames="vault"
		            >
		    	 	<div key={card.id} className="grid-item"> 
		    		<h1>{card.name}</h1>   
		    		 <p> {card.details} </p>    
		    		<div className="btn btn--black" onClick={()=>{props.removeFromVault(card)}}>REMOVE</div>
		    		</div></CSSTransition>)
				    
		    		
		    })}</TransitionGroup> : null}
		   
		    
			
				
			</div>
		);
}

function msp(store){
return {vault: store.vault, show: store.show}
}
function mdp(dispatch){
	return {
		removeFromVault: (object)=> {
			dispatch({type:"REMOVE_FR_VAULT", payload: object})
		},
		showVault: (object)=> {
			dispatch({type:"SHOW_VAULT", payload:object})
		},
		hideVault: (object)=> {
			dispatch({type:"HIDE_VAULT", payload:object})
		}

	}
}

export default connect(msp,mdp)(vault);