import React from 'react'
import PropTypes from 'prop-types'

export default function ValidationError(props) {
	if (props.message) {
		return <div className='error__message'>{props.message}</div>
	}
	return <></>
}

ValidationError.propTypes = {
	message: PropTypes.string || PropTypes.element,
}
