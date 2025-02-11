import { useState } from "react";

function BasicCalculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operator, setOperator] = useState("+");
    const [result, setResult] = useState(0);

    const calculate = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (isNaN(n1) || isNaN(n2)) {
            setResult("Invalid Input");
        } else {
            let res = 0;
            switch (operator) {
                case "+": res = n1 + n2; break;
                case "-": res = n1 - n2; break;
                case "*": res = n1 * n2; break;
                case "/": res = n2 !== 0 ? n1 / n2 : "Error"; break;
                default: res = 0;
            }
            setResult(res);
        }

        // // Reset input fields to blank
        // setNum1("");
        // setNum2("");
    };

    return (
        <>
            <h1 style={{ color: 'red' }}>Result: {result}</h1>
            <input 
                type="number" 
                value={num1} 
                onChange={(e) => setNum1(e.target.value)} 
            /><br />
            <input 
                type="number" 
                value={num2} 
                onChange={(e) => setNum2(e.target.value)}
            /><br />
            <select name="operator" value={operator} onChange={(e) => setOperator(e.target.value)}>
                <option value="+">Addition</option>
                <option value="-">Subtraction</option>
                <option value="*">Multiplication</option>
                <option value="/">Division</option>
            </select><br />
            <button onClick={calculate}>Calculate</button>
        </>
    );
}

export default BasicCalculator;