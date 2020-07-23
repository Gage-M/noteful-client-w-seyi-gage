import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Sidebar from './components/Nav/Sidebar'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import AddNote from './components/Main/AddNote'
import FolderList from './components/Main/FolderList'
import AddNav from './components/Nav/AddNav'
import AddFolderMain from './components/Main/AddFolderMain'
import NoteMain from './components/Main/NoteMain'
import NoteNav from './components/Nav/NoteNav'

import './App.css'

const App = () => {
	return (
		<div className='App'>
			<Switch>
				<Route path='/folder/:folderid' component={Sidebar} />
				<Route
					path='/note/:noteid'
					render={(routeProps) => <NoteNav {...routeProps} />}
				/>
				<Route
					path='/add-folder'
					render={(routeProps) => <AddNav {...routeProps} />}
				/>
				<Route
					path='/add-note'
					render={(routeProps) => <AddNav {...routeProps} />}
				/>
				<Route path='/' exact component={Sidebar} />
			</Switch>
			<Header />
			<Switch>
				<Route
					path='/folder/:folderid'
					render={(routeProps) => <FolderList {...routeProps} />}
				/>
				<Route
					path='/note/:noteid'
					render={(routeProps) => <NoteMain {...routeProps} />}
				/>
				<Route path='/add-folder' component={AddFolderMain} />
				<Route path='/add-note' component={AddNote} />
				<Route path='/' exact component={Main} />
			</Switch>
		</div>
	)
}

export default App
