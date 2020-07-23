import React, { Component } from 'react'
import config from './config'

export const Context = React.createContext({
	addFolder: () => {},
	addNote: () => {},
	deleteNote: () => {},
	getCurrentNote: () => {},
	getFolderId: () => {},
	getName: () => {},
})

export class AppContext extends Component {
	state = {
		folders: [],
		notes: [],
		error: false,
	}

	setNotes = (newNotes) => {
		this.setState({ notes: newNotes })
	}
	setFolders = (newFolders) => {
		this.setState({ folders: newFolders })
	}
	getCurrentNote = (id) => {
		return this.state.notes.find((note) => note.id ===Number( id))
	}

	getName = (id) =>
		this.state.folders.find((folder) => folder.id === id)

	getFolderId = (matchId) => {
		const note = this.state.notes.find((note) => note.id === matchId)
		if (note === undefined) {
			return 'Error'
		}
		const folderName = this.getName(note.folderId).name
		return folderName
	}

	addFolder = (folder) => {
		this.setState({
			folders: [...this.state.folders, folder],
		})
	}
	deleteNote = (noteid) => {
		const updated = this.state.notes.filter(
			(note) => note.id !== noteid
		)
		this.setState({ notes: updated })
	}
	addNote = (note) => {
		this.setState({ notes: [...this.state.notes, note] })
	}

	componentDidMount() {
		Promise.all([
			fetch(`${config.API_ENDPOINT}/notes`,{
				method : 'GET',
				headers : {
					'content-type' : 'application/json',
					"Authorization": `Bearer ${config.API_KEY}`
				}
			}),
			fetch(`${config.API_ENDPOINT}/folders`,{
				method : 'GET',
				headers : {
					'content-type' : 'application/json',
					'Authorization' : `Bearer ${config.API_KEY}`
				}
			}),
		])
			.then(([notesRes, foldersRes]) => {
				if (!notesRes.ok)
					return notesRes.json().then((e) => Promise.reject(e))
				if (!foldersRes.ok)
					return foldersRes.json().then((e) => Promise.reject(e))

				return Promise.all([notesRes.json(), foldersRes.json()])
			})
			.then(([notes, folders]) => {
				this.setState({ notes, folders })
			})
			.catch((error) => {
				console.error({ error })
			})
	}
	
	render() {
		console.log(this.state.notes.map(i => typeof i.id))
		return (
			<Context.Provider
				value={
					{
					state: {
						...this.state,
					},
					actions: {
						folder :this.state,
						notes : this.state, 
						getName: this.getName,
						getFolderId: this.getFolderId,
						getCurrentNote: this.getCurrentNote,
						deleteNote: this.deleteNote,
						addFolder: this.addFolder,
						addNote: this.addNote,
					},
					getCurrentNote: this.getCurrentNote,
				}}
			>
				{this.props.children}
			</Context.Provider>
		)
	}
}

export const Consumer = Context.Consumer
