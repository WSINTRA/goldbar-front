//Big fat search bar

import React, { Component } from 'react';

function searchBar(props) {

	let { filter, controlFunction } = props
		return (
			<div className="searchBar">
			<input type="text" placeholder="SEARCH BY NAME" 
			value={filter} 
			onChange={(e)=>controlFunction(e.target.value)}/>
				
			</div>
		);
}

export default searchBar;