import React from 'react'

import { NavLink } from 'react-router-dom'

export default function NavFolderItem(props) {
	const amountOfNotes = (notes, folderid) =>
		notes.filter((note) => note.folder_id === folderid).length
	console.log(props)
	return (
		<li
			key={props.folder.id}
			id={props.folder.id}
			className='folder'
			folderid={props.folder.id}
			name={props.folder.folder_name}
		>
			<NavLink
				to={`/folder/${props.folder.id}`}
				id={props.folder.id}
				className='list__nav__folder__link'
			>
				{props.folder.folder_name}
				<span className='note__count'>
					{amountOfNotes(props.notes, props.folder.id)}
				</span>
			</NavLink>
		</li>
	)
}
