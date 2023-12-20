// Створити масив чисел, елементи якого задає користувач. Вивести суму цих чисел.

// За основу взяти задачку з урока, де користувач вводить всі елементи одним рядком.

// cancel має припиняти виконання програми, а порожній рядок не повинен сприйматися як 0

function isValidNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function getInput() {
    let userInput;

    while (true) {
        userInput = prompt("Введіть число (або натисніть Cancel для завершення):");

        if (userInput === null) {
            break;
        }

        if (userInput.trim() === "") {
            alert("Ви ввели порожній рядок. Будь ласка, введіть число або натисніть Cancel для завершення.");
            continue;
        }

        if (isValidNumber(userInput)) {
            return parseFloat(userInput);
        } else {
            alert("Введено нечислове значення. Будь ласка, введіть число або натисніть Cancel для завершення.");
        }
    }

    return null; // Користувач натиснув "Cancel" або ввів порожній рядок
}

function getValidNumbers() {
    let numbers = [];
    let userInput;

    while (true) {
        userInput = getInput();

        if (userInput === null) {
            break;
        }

        numbers.push(userInput);
    }

    return numbers;
}

function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Отримання валідних чисел від користувача
const validNumbers = getValidNumbers();

// Виведення валідних чисел
console.log("Введені валідні числа:", validNumbers);

// Обчислення суми введених чисел
const sumCalc = calculateSum(validNumbers);

// Виведення суми
console.log("Сума введених чисел: " + sumCalc);
