import React from 'react'
import { Link } from 'react-router-dom'
import NavFolderList from './NavFolderList'
import { Consumer } from '../../AppContext'

import './Sidebar.css'

export default function Sidebar(props) {
	return (
		<nav className='Sidebar__nav'>
			<div className='nav__list'>
				<Consumer>
					{(value) => <NavFolderList {...value.state} />}
				</Consumer>
			</div>
			<div className='list__nav__button__wrapper'>
				<button className='list__nav__button'>
					<Link to='/add-folder' className='list__nav__link'>
						Add Folder
					</Link>
				</button>
			</div>
		</nav>
	)
}
