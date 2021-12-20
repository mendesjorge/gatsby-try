import * as React from 'react'
import Key from '@components/key.js'

import '@styles/styles.css'

const rows = [[	
	{value: '`', isTinkling: false},
	{value: '1', isTinkling: false},
	{value: '2', isTinkling: false},
	{value: '3', isTinkling: false},
	{value: '4', isTinkling: false},
	{value: '5', isTinkling: false},
	{value: '6', isTinkling: false},
	{value: '7', isTinkling: false},
	{value: '8', isTinkling: false},
	{value: '9', isTinkling: false},
	{value: '0', isTinkling: false},
	{value: '-', isTinkling: false},
	{value: '=', isTinkling: false},
],[
	{value: 'tab', isTinkling: false, classes:"utility"},
	{value: 'q', isTinkling: false},
	{value: 'w', isTinkling: false},
	{value: 'e', isTinkling: false},
	{value: 'r', isTinkling: false},
	{value: 't', isTinkling: false},
	{value: 'y', isTinkling: false},
	{value: 'u', isTinkling: false},
	{value: 'i', isTinkling: false},
	{value: 'o', isTinkling: false},
	{value: 'p', isTinkling: false},
	{value: '[', isTinkling: false},
	{value: ']', isTinkling: false}
],[
	{value: 'caps', isTinkling: false, classes:"utility"},
	{value: 'a', isTinkling: false},
	{value: 's', isTinkling: false},
	{value: 'd', isTinkling: false},
	{value: 'f', isTinkling: false},
	{value: 'g', isTinkling: false},
	{value: 'h', isTinkling: false},
	{value: 'j', isTinkling: false},
	{value: 'k', isTinkling: false},
	{value: 'l', isTinkling: false},
	{value: ';', isTinkling: false},
	{value: '\'', isTinkling: false},
],[
	{value: 'shift', isTinkling: false, classes:"utility"},
	{value: 'z', isTinkling: false},
	{value: 'x', isTinkling: false},
	{value: 'c', isTinkling: false},
	{value: 'v', isTinkling: false},
	{value: 'b', isTinkling: false},
	{value: 'n', isTinkling: false},
	{value: 'm', isTinkling: false},
	{value: ',', isTinkling: false},
	{value: '.', isTinkling: false},
	{value: '/', isTinkling: false}
]]
const rowProcess = (row) => row.map(key => {
	return (<Key key={key.value} name={key.value} tinkling={key.isTinkling} classes={key.classes}/>)
})
const keysElements = rows.map((row, idx) => {
	return (
	<div key={idx} className="row"> 
		{rowProcess(row)}
	</div>
	)
})
const Keyboard = () => {
	return (
		<main>
			<div className="keyboard">{keysElements}</div>
		</main>
	)
}

export default Keyboard