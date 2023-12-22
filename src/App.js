import { useState } from 'react'
import styles from './App.module.css'

const NUMS = [
	{ id: '0', name: '0' },
	{ id: '1', name: '1' },
	{ id: '2', name: '2' },
	{ id: '3', name: '3' },
	{ id: '4', name: '4' },
	{ id: '5', name: '5' },
	{ id: '6', name: '6' },
	{ id: '7', name: '7' },
	{ id: '8', name: '8' },
	{ id: '9', name: '9' },
]

export const App = () => {
	let [operand1, setOperand1] = useState('')
	let [operand2, setOperand2] = useState('')
	let [operator, setOperator] = useState('')
	let [result, setResult] = useState(false)

	function reset() {
		setOperand1((operand1 = ''))
		setOperand2((operand2 = ''))
		setOperator((operator = ''))
	}

	function output(number) {
		if (operand2 === '' && operator === '') {
			setOperand1(String(operand1) + number)
		} else {
			setOperand2(String(operand2) + number)
		}
	}

	function resulting(operand1, operator, operand2) {
		if (operator === '+') {
			setOperand1((operand1 = Number(operand1) + Number(operand2)))
		} else if (operator === '-') {
			setOperand1((operand1 = Number(operand1) - Number(operand2)))
		}
		setOperand2((operand2 = ''))
		setOperator((operator = ''))
		console.log('result')

	}

	return (
		<div className={styles.app}>
			<h1>Simple Calculator</h1>
			<div className={styles.container}>
				<div className={result ? styles.outcome : styles.display}>
					{String(operand1) + String(operator) + String(operand2) }
				</div>
				<div className={styles.operators}>
					<button
						className={styles.operand}
						onClick={() => {
							setOperator(operator + '+')
							setResult((result = false))
						}}
					>
						+
					</button>
					<button
						className={styles.operand}
						onClick={() => {
							setOperator(operator + '-')
							setResult((result = false))
						}}
					>
						-
					</button>
					<button className={styles.operand} onClick={() => reset()}>
						C
					</button>
					<button
						className={styles.operand}
						onClick={() => {
							resulting(operand1, operator, operand2)
							setResult((result = true))
						}}
					>
						=
					</button>
				</div>
				<div className={styles.nums}>
					{NUMS.map((num) => (
						<button key={num.id} className={styles.button} onClick={() => output(num.name)}>
							{num.name}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}
