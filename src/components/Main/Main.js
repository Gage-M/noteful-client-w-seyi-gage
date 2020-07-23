import React from 'react'
import NoteList from './NoteList'

import './Main.css'
import { Consumer } from '../../AppContext'

export default function Main() {
	return (
		<main className='app__main'>
			<section className='note__list__wrapper'>
				<Consumer>
					{(value) => <NoteList value={value.state} />}
				</Consumer>
			</section>
		</main>
	)
}
