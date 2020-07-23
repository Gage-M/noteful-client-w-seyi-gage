import React from 'react'
import { Link } from 'react-router-dom'
import { Consumer } from '../../AppContext'
import NoteListItem from './NoteListItem'

import './Main.css'

export default function FolderList(props) {
	const folderid = props.match.params.folderid
	console.log(props)

	return (
		<main className='app__main'>
			<section className='note__list__wrapper'>
				<ul className='note__list'>
					<Consumer>
						{ value =>
							value.state.notes.map(
								(note) =>
									note.folder_id === Number(folderid) && (
										<NoteListItem key={note.id} note={note} />
									)
							)
						}
					</Consumer>
					<div className='add__note__container'>
						<Link
							id='add-note-link'
							className='add__note__link'
							to='/add-note'
						>
							Add Note
						</Link>
					</div>
				</ul>
			</section>
		</main>
	)
}
