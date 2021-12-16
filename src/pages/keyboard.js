import * as React from 'react'
import Key from '@components/key.js'


const rows = [[
	{value: 'q', isTinkling: false},
	{value: 'w', isTinkling: false},
	{value: 'e', isTinkling: false},
	{value: 'r', isTinkling: false},
	{value: 't', isTinkling: false},
	{value: 'y', isTinkling: false},
	{value: 'u', isTinkling: false},
	{value: 'i', isTinkling: false},
	{value: 'o', isTinkling: false},
	{value: 'p', isTinkling: false}
]]
const rowProcess = (row) => row.map(key => {
	return (<Key key={key.value} name={key.value} tinkling={key.isTinkling}/>)
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