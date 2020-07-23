import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { MdDeleteForever } from 'react-icons/md'

import './Main.css'
import './button.css'
import { Context, Consumer } from '../../AppContext'
import ErrorBoundary from '../ErrorBoundary'
import config from '../../config'

class NoteMain extends Component {
	static contextType = Context

	handleClickDelete = (event) => {
		event.preventDefault()
		const { noteid } = this.props.match.params
		const { deleteNote } = this.context.actions
		fetch(`http://localhost:8000/notes/${noteid}`, {
			method: 'DELETE',
			headers : {
				'Authorization' : `Bearer ${config.API_TOKEN}`
			}
		})
			.then((res) => {
				if (!res.ok) {
					return res.json().then((error) => {
						throw error
					})
				}
				return res.json()
			})
			.then((data) => deleteNote(noteid))
			.catch((error) => console.log(error))
			.then(() => this.props.history.push('/'))
	}

	render() {
		const { noteid } = this.props.match.params
		const { getCurrentNote } = this.context.actions
		console.log(noteid)

		return (
			<main className='app__main'>
				<section className='note__list__wrapper'>
					<li className='note__item'>
						<div className='note__'>
							<ErrorBoundary>
								<h2 className='note__title'>
									<Link to={`/note/${noteid}`}>
										{getCurrentNote(noteid) &&
											getCurrentNote(noteid).name}
									</Link>
								</h2>
							</ErrorBoundary>

							<Consumer>
								{(value) => (
									<MdDeleteForever
										key={noteid}
										id={noteid}
										className='delete__icon'
										onClick={(event) => {
											this.handleClickDelete(event)
										}}
									/>
								)}
							</Consumer>

							<div className='note__dates'>
								<ErrorBoundary>
									<div className='note__date__'>
										Modified{' '}
										<span className='date'>{`${new Date(
											getCurrentNote(noteid) &&
												getCurrentNote(noteid).modified
										).toDateString()}`}</span>
									</div>
								</ErrorBoundary>
							</div>
						</div>
					</li>

					<div className='note__content'>
						<p>
							{getCurrentNote(noteid) &&
								getCurrentNote(noteid).content}
						</p>
					</div>
				</section>
			</main>
		)
	}
}
export default withRouter(NoteMain)
