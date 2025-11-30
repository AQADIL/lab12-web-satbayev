class Calculator {
    constructor() {
        this.inputX = document.getElementById('inputX');
        this.inputY = document.getElementById('inputY');
        this.resultContainer = document.getElementById('resultContainer');
        this.resultValue = document.getElementById('resultValue');
        this.operationButtons = document.querySelectorAll('.operation-btn');
        
        this.init();
    }

    init() {
        this.operationButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const operation = e.target.dataset.operation;
                this.calculate(operation);
            });
        });

        this.inputX.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.inputY.focus();
            }
        });

        this.inputY.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.calculate('add');
            }
        });

        this.inputX.addEventListener('input', () => this.clearResult());
        this.inputY.addEventListener('input', () => this.clearResult());
    }

    getInputValues() {
        const x = parseFloat(this.inputX.value);
        const y = parseFloat(this.inputY.value);
        
        return { x, y };
    }

    validateInputs() {
        const xValue = this.inputX.value.trim();
        const yValue = this.inputY.value.trim();

        if (!xValue || !yValue) {
            this.showError('X және Y өрістерін толтырыңыз');
            return false;
        }

        const { x, y } = this.getInputValues();
        
        if (isNaN(x) || isNaN(y)) {
            this.showError('Жарамды сандарды енгізіңіз');
            return false;
        }

        return true;
    }

    calculate(operation) {
        if (!this.validateInputs()) {
            return;
        }

        const { x, y } = this.getInputValues();
        let result;

        try {
            switch (operation) {
                case 'add':
                    result = x + y;
                    break;
                case 'subtract':
                    result = x - y;
                    break;
                case 'multiply':
                    result = x * y;
                    break;
                case 'divide':
                    if (y === 0) {
                        this.showError('Нөлге бөлуге болмайды');
                        return;
                    }
                    result = x / y;
                    break;
                default:
                    this.showError('Белгісіз операция');
                    return;
            }

            this.showResult(result);
        } catch (error) {
            this.showError('Есептеу қатесі');
        }
    }

    showResult(value) {
        this.resultContainer.classList.remove('error');
        this.resultContainer.classList.add('success');
        this.resultValue.classList.remove('error');
        this.resultValue.classList.add('success');
        
        if (Number.isInteger(value)) {
            this.resultValue.textContent = value.toString();
        } else {
            this.resultValue.textContent = value.toFixed(6).replace(/\.?0+$/, '');
        }
    }

    showError(message) {
        this.resultContainer.classList.remove('success');
        this.resultContainer.classList.add('error');
        this.resultValue.classList.remove('success');
        this.resultValue.classList.add('error');
        this.resultValue.textContent = message;
        
        this.resultContainer.classList.add('shake');
        setTimeout(() => {
            this.resultContainer.classList.remove('shake');
        }, 300);
    }

    clearResult() {
        if (this.resultValue.classList.contains('error') || 
            this.resultValue.classList.contains('success')) {
            this.resultContainer.classList.remove('success', 'error');
            this.resultValue.classList.remove('success', 'error');
            this.resultValue.textContent = '0';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});
