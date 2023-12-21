while (true) {
    const elementsInput = prompt('Enter numbers separating them by ","')
    if (elementsInput === null) {
        alert("Okay good bye");
        break;
    }
    else if (!elementsInput) {
        alert("Nothing is entered")
    }

    else {
        const userArray = elementsInput.split(',');

        if (userArray.some(element => isNaN(parseFloat(element.trim())))) {
            alert("Non-numeric values are entered");
        }
        else if (userArray.length < 4) {
            alert('Too short list')
        }

        else {
            let sum = 0;
            for (let i = 0; i < userArray.length; i++) {
                const number = parseFloat(userArray[i].trim());
                if (isFinite(number)) {
                    sum += number;
                }

            }
            alert("The sum of the entered numbers: " + sum)
        }
    }
}








