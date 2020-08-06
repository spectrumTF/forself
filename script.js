class Calculator {
    constructor(currentOpText, previousOpText) {
        this.currentOpText = currentOpText
        this.previousOpText = previousOpText
        this.clear()
    }
    clear() {
        this.currentOp = ''
        this.previousOp = ''
        this.operation = undefined
    }
    delete() {

    }
    appendNumber(number) {
        if (number === "." && this.currentOp.includes(".")) return
        this.currentOp = this.currentOp.toString() + number.toString()
    }
    chooseOperation(operation) {
        if (this.currentOp === '') return
        if (this.currentOp !== '') this.compute()
        this.operation = operation
        this.previousOp = this.currentOp + operation.toString()
        this.currentOp = ''
    }
    compute() {

    }
    updateDisplay() {
        this.currentOpText.innerText = this.currentOp
        this.previousOpText.innerText = this.previousOp
    }
}




const numberB = document.querySelectorAll('[data-number]')
const operationB = document.querySelectorAll('[data-operation]')
const equalsB = document.querySelector('[data-equals]')
const allclearB = document.querySelector('[data-all-clear]')
const deleteB = document.querySelector('[data-delete]')
const currentOpText = document.querySelector('[data-current-op]')
const previousOpText = document.querySelector('[data-previous-op]')

const calculator = new Calculator(currentOpText, previousOpText)

numberB.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationB.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
