import React, { Component } from 'react'

export default class ErrorBlock extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hasError: false,
		}
	}
	static getDerivedStateFromError(error) {
		return { hasError: true }
	}
	render() {
		if (this.state.hasError) {
			return <h2>SORRY! There was an error in the display!</h2>
		}
		return this.props.children
	}
}
