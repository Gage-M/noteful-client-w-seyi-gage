import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './Sidebar.css'
import { Consumer, Context } from '../../AppContext'
import ErrorBoundary from '../ErrorBoundary'

class NoteNav extends Component {
	currentNoteId = this.props.match.params.noteid

	static contextType = Context
	render() {
		const { noteid } = this.props.match.params
		const { getFolderId } = this.context.actions
		const text = getFolderId(noteid)
		return (
			<nav className='Sidebar__nav'>
				<div className='nav__list'>
					<button onClick={() => this.props.history.goBack()}>
						Go Back
					</button>
				</div>
				<ErrorBoundary>
					<Consumer>
						{(value) => (
							<div>
								Folder:
								{text}
							</div>
						)}
					</Consumer>
				</ErrorBoundary>
			</nav>
		)
	}
}
export default NoteNav
