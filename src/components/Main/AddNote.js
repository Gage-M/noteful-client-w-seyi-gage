import React from 'react'
import './AddNote.css'
import './Main.css'
import { withRouter } from 'react-router-dom'
import AddNoteForm from './AddNoteForm'

const AddNote = () => {
	return (
		<main className='app__main'>
			<section className='note__list__wrapper'>
				<h2>Add Note</h2>
				<AddNoteForm />
			</section>
		</main>
	)
}
export default withRouter(AddNote)
