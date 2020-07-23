import React from 'react'
import './Sidebar.css'

export default function AddNav(props) {
	return (
		<nav className='Sidebar__nav'>
			<div className='nav__list'>
				<button onClick={() => props.history.goBack()}>
					Go Back
				</button>
			</div>
		</nav>
	)
}
