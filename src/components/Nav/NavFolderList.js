import React from 'react'
import NavFolderItem from './NavFolderItem'
import { Consumer } from '../../AppContext'
import ErrorBoundary from '../ErrorBoundary'

export default function NavFolderList() {
	return (
		<ul className='list'>
			<ErrorBoundary>
				<Consumer>
					{(value) =>
						value.state.folders.map((folder) => (
							<NavFolderItem
								key={folder.id}
								folder={folder}
								notes={value.state.notes}
							/>
						))
					}
				</Consumer>
			</ErrorBoundary>
		</ul>
	)
}
