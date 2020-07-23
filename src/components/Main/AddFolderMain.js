import React from 'react'
import AddFolderForm from './AddFolderForm'
import { Consumer } from '../../AppContext'
import './AddFolderMain.css'
import './Main.css'
import ErrorBoundary from '../ErrorBoundary'

export default function AddFolderMain() {
	return (
		<main className='app__main'>
			<section className='form__wrapper'>
				<h2>Add Folder</h2>
				<ErrorBoundary>
					<Consumer>
						{(value) => <AddFolderForm value={value} />}
					</Consumer>
				</ErrorBoundary>
			</section>
		</main>
	)
}
