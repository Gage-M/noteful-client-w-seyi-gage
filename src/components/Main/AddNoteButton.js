import React from 'react'
import { Link } from 'react-router-dom'

import './button.css'

export default function AddNoteButton() {
	return (
		<div className='add__note__container'>
			<Link
				id='add-note-link'
				className='add__note__link'
				to='/add-note'
			>
				Add Note
			</Link>
		</div>
	)
}
