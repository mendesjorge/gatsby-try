import * as React from 'react'
import * as classNames from 'classnames'
const Key = ({name, tinkling, clicked}) => {
	return (
		<button className={classNames({"key":true, 'tinkling': tinkling})} data-key={name} onClick={clicked}>{name}</button>
	)
}

export default Key