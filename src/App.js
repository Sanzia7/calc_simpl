import { useState } from 'react'
import styles from './App.module.css'

const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const OPERATORS = ['+', '-', '=', 'C']
const NUMBER = 'NUMBER'
const OPERATOR = 'OPERATOR'

export const App = () => {
	const [operand1, setOperand1] = useState('')
	const [operand2, setOperand2] = useState('')
	const [operator, setOperator] = useState('')
	const [isResult, setIsResult] = useState(false)

	const clear = () => {
		setOperand1('')
		setOperand2('')
		setOperator('')
		setIsResult(false)
	}

	const handleClick = (value, type) => () => {
		if (type === NUMBER) {
			if (operand1 && operator) {
				setOperand2((prev) => prev + value)
			} else {
				setOperand1((prev) => prev + value)
			}
		}

		if (type === OPERATOR) {
			switch (value) {
				case 'C':
					clear()
					break
				case '=':
					setIsResult(true)
					break
				default:
					if (operand1) {
						setOperator(value)
					}
			}
		}

		if (isResult) {
			clear()
		}
	}

	const renderOutput = () => {
		let output = ''

		if (isResult) {
			if (operator === '+') {
				output = Number(operand1) + Number(operand2)
			}

			if (operator === '-') {
				output = Number(operand1) - Number(operand2)
			}
		} else {
			output = `${operand1}${operator}${operand2}`
		}

		return output
	}

	return (
		<div className={styles.app}>
			<div className={styles.container}>
				<div className={`${styles.display} ${isResult ? styles.outcome : ''}`}>
					{renderOutput()}
				</div>
				<div className={styles.operators}>
					{OPERATORS.map((item) => (
						<button
							className={styles.operand}
							key={item}
							onClick={handleClick(item, OPERATOR)}
						>
							{item}
						</button>
					))}
				</div>
				<div className={styles.nums}>
					{NUMS.map((item) => (
						<button
							key={item}
							className={styles.button}
							onClick={handleClick(item, NUMBER)}
						>
							{item}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}

//--------------------------------------------------

// const NUMS = [
// 	{ id: '0', name: '0' },
// 	{ id: '1', name: '1' },
// 	{ id: '2', name: '2' },
// 	{ id: '3', name: '3' },
// 	{ id: '4', name: '4' },
// 	{ id: '5', name: '5' },
// 	{ id: '6', name: '6' },
// 	{ id: '7', name: '7' },
// 	{ id: '8', name: '8' },
// 	{ id: '9', name: '9' },
// ]
//
// export const App = () => {
// 	let [operand1, setOperand1] = useState('')
// 	let [operand2, setOperand2] = useState('')
// 	let [operator, setOperator] = useState('')
// 	let [result, setResult] = useState(false)
//
// 	function reset() {
// 		setOperand1((operand1 = ''))
// 		setOperand2((operand2 = ''))
// 		setOperator((operator = ''))
// 		setResult(false)
// 	}
//
// 	function output(number) {
// 		if (operand2 === '' && operator === '') {
// 			setOperand1(String(operand1) + number)
// 		} else {
// 			setOperand2(String(operand2) + number)
// 		}
// 		// if (result) {
// 		// 	setResult(false)
// 		// }
// 	}
//
// 	function resulting(operand1, operator, operand2) {
// 		if (operator === '+') {
// 			setOperand1((operand1 = Number(operand1) + Number(operand2)))
// 		} else if (operator === '-') {
// 			setOperand1((operand1 = Number(operand1) - Number(operand2)))
// 		}
// 		setOperand2((operand2 = ''))
// 		setOperator((operator = ''))
// 		console.log('result')
// 		// if (result) {
// 		// 	setResult(false)
// 		// }
// 	}
//
//
//
//
// 	return (
// 		<div className={styles.app}>
// 			<h1>Simple Calculator</h1>
// 			<div className={styles.container}>
// 				<div className={result ? styles.outcome : styles.display}>
// 					{/* {String(operand1) + String(operator) + String(operand2)} */}
// 					{operand1 + operator + operand2}
// 				</div>
// 				<div className={styles.operators}>
// 					<button
// 						className={styles.operand}
// 						onClick={() => {
// 							setOperator(operator + '+')
// 							setResult(false)
// 						}}
// 					>
// 						+
// 					</button>
// 					<button
// 						className={styles.operand}
// 						onClick={() => {
// 							setOperator(operator + '-')
// 							setResult(false)
// 						}}
// 					>
// 						-
// 					</button>
// 					<button className={styles.operand} onClick={() => reset()}>
// 						C
// 					</button>
// 					<button
// 						className={styles.operand}
// 						onClick={() => {
// 							resulting(operand1, operator, operand2)
// 							setResult(true)
// 						}}
// 					>
// 						=
// 					</button>
//
// 				</div>
// 				<div className={styles.nums}>
// 					{NUMS.map((num) => (
// 						<button
// 							key={num.id}
// 							className={styles.button}
// 							onClick={() => output(num.name)}
// 						>
// 							{num.name}
// 						</button>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
