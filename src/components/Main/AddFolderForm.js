import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Context } from '../../AppContext'
import ValidateInputError from './ValidateInputErrors'
import config from '../../config'

class AddFolderForm extends Component {
	state = {
		folder_name: '',
		error: null,
		submit: false,
	}
	handleSubmit = (event) => {
		event.preventDefault()
		this.addFoldertoApi(this.state.folder_name)
	}

	setFolderNameValue = (name) => {
		this.setState({ folder_name: name })
	}

	setError = (error) => {
		this.setState({ error: error })
	}

	validateInput = () => {
		const { folder_name } = this.state
		if (
			folder_name.length < 3 ||
			!folder_name.match(/^(\w+\S+)$/)
		) {
			return 'filename must have a name (or a letter)'
		}
	}

	addFoldertoApi = (folder_name) => {
		const jsonObj = JSON.stringify({folder_name})
		const { addFolder } = this.context.actions
		fetch(`${config.API_ENDPOINT}/folders`, {
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json' ,
				'Authorization' : `Bearer ${config.API_TOKEN}`
			},
			body: jsonObj,
		})
			.then((res) => {
				if (!res.ok) {
					return res.json().then((error) => {
						throw error
					})
				}
				return res.json()
			})
			.catch((error) => this.setError(error))
			.then((data) => addFolder(data))
			.then(() => this.props.history.push('/'))
	}
	static contextType = Context
	render() {
		console.log(this.state)
		return (
			<form
				className='add__folder__form'
				action='#'
				onSubmit={(e) => this.handleSubmit(e)}
			>
				<div className='form__field'>
					<label htmlFor='folder__name__input'>Name</label>
					<input
						id='folder__name__input'
						type='text'
						value={this.state.folder_name}
						onChange={(event) =>
							this.setFolderNameValue(event.target.value)
						}
						required
					/>
				</div>
				<ValidateInputError massages={this.validateInput()} />
				<div className='add__button'>
					<button type='submit' disabled={this.validateInput()}>
						Add Button
					</button>
				</div>
			</form>
		)
	}
}

export default withRouter(AddFolderForm)
