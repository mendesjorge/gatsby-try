import * as React from 'react'
import * as classNames from 'classnames'
import Key from '@components/key.js'

import '@styles/styles.css'
class Keyboard extends React.Component {
	constructor(props){
		super(props)
		this.state = { tinklingKey: '', hasError: false}
	}

	changeTinklingKey(){
		const rowPick = Math.round(Math.random() * 3)
		const keyPick = Math.round(Math.random() * (rows[rowPick].length-1))
		const selectedRow = rows[rowPick][keyPick]
		this.setState({tinklingKey: selectedRow.value})
	}
	
	checkIfTinkling(event){
		const key = event.key
		if(key === this.state.tinklingKey){
			this.changeTinklingKey(key)
		}
		else{
			this.setState({hasError: true})
			setTimeout(()=>{
				this.setState({hasError: false})
			}, 200)
		}
		event.preventDefault()
	}

	rowProcess(row){
		return row.map(key => {
			return (<Key key={key.value} name={key.display} tinkling={key.value === this.state.tinklingKey} classes={key.classes} />)
		})
	}
	
	componentDidMount() {
		document.addEventListener('keyup', this.checkIfTinkling.bind(this), true)
		this.changeTinklingKey()
	}

	componentWillUnmount() {
		document.removeEventListener('keyup', this.checkIfTinkling.bind(this), true)
	}

	render() {
		const keysElements = rows.map((row, idx) => {
			return (
			<div key={idx} className="row"> 
				{this.rowProcess(row)}
			</div>
			)
		})
		return (
			<main>
				<div className={classNames({"keyboard": true, 'has-error': this.state.hasError})}>{keysElements}</div>
			</main>
		)
	}
}
const rows = [[	
	{display: '`', value: '`'},
	{display: '1', value: '1'},
	{display: '2', value: '2'},
	{display: '3', value: '3'},
	{display: '4', value: '4'},
	{display: '5', value: '5'},
	{display: '6', value: '6'},
	{display: '7', value: '7'},
	{display: '8', value: '8'},
	{display: '9', value: '9'},
	{display: '0', value: '0'},
	{display: '-', value: '-'},
	{display: '=', value: '='},
],[
	{display: 'tab', value: 'Tab', classes:"utility"},
	{display: 'q', value: 'q'},
	{display: 'w', value: 'w'},
	{display: 'e', value: 'e'},
	{display: 'r', value: 'r'},
	{display: 't', value: 't'},
	{display: 'y', value: 'y'},
	{display: 'u', value: 'u'},
	{display: 'i', value: 'i'},
	{display: 'o', value: 'o'},
	{display: 'p', value: 'p'},
	{display: '[', value: '['},
	{display: ']', value: ']'}
],[
	{display: 'caps', value: 'CapsLock', classes:"utility"},
	{display: 'a', value: 'a'},
	{display: 's', value: 's'},
	{display: 'd', value: 'd'},
	{display: 'f', value: 'f'},
	{display: 'g', value: 'g'},
	{display: 'h', value: 'h'},
	{display: 'j', value: 'j'},
	{display: 'k', value: 'k'},
	{display: 'l', value: 'l'},
	{display: ';', value: ';'},
	{display: '\'', value: '\''},
],[
	{display: 'shift', value: 'Shift', classes:"utility"},
	{display: 'z', value: 'z'},
	{display: 'x', value: 'x'},
	{display: 'c', value: 'c'},
	{display: 'v', value: 'v'},
	{display: 'b', value: 'b'},
	{display: 'n', value: 'n'},
	{display: 'm', value: 'm'},
	{display: ',', value: ','},
	{display: '.', value: '.'},
	{display: '/', value: '/'}
]]


export default Keyboard