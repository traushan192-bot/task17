// Function that returns a Promise for division
function divideNumbers(a, b) {
    return new Promise(function(resolve, reject) {
        if (b === 0) {

            reject("Error: Division by zero is not allowed.");
        } else {

            resolve(a / b);

        }
    });
}



const testCases = [
    { num1: 10, num2: 2 },
    { num1: 19, num2: 0 },

    { num1: 15, num2: 3 },
    { num1: 20, num2: 4 },
    { num1: 50, num2: 0 }
];

const outputDiv = document.getElementById("output");




for (let i = 0; i < testCases.length; i++) {
    let num1 = testCases[i].num1;

    let num2 = testCases[i].num2;
    let exampleNum = i + 1;

    divideNumbers(num1, num2)
        .then(function(result) {
            outputDiv.innerHTML += `
            
                <div class="example">
                    <p>Example ${exampleNum}</p>
                    <ul>

                        <li>Dividing ${num1} by ${num2}...</li>
                        <li>Result: ${result}</li>
                    </ul>
                </div>
            `;

        })
        .catch(function(error) {
            outputDiv.innerHTML += `
                <div class="example">
                    <p>Example ${exampleNum}</p>



                    <ul>
                        <li>Dividing ${num1} by ${num2}...</li>
                        <li>${error}</li>
                    </ul>

                </div>
            `;
        });
}
