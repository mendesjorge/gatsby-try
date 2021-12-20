import * as React from 'react'
import * as classNames from 'classnames'

const Key = ({name, tinkling, clicked, classes}) => {
	let classnames = {
		key: true,
		tinkling: tinkling
	}
	console.log(classes)
	return (
		<button className={classes +' '+ classNames(classnames)} data-key={name} onClick={clicked}>{name}</button>
	)
}

export default Key