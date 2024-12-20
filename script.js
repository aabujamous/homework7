let items = [];

function addItem() {
    const input = document.getElementById('inputValue');
    const value = input.value.trim();

    if (value) {
        items.push(value);
        input.value = '';
        alert("Item added successfully!");
    } else {
        alert("Please enter a value!");
    }
}

function displayItems() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    if (items.length > 0) {
        items.forEach((item, index) => {
            const para = document.createElement('p');
            para.textContent = `Element ${index + 1} = ${item}`;
            outputDiv.appendChild(para);
        });
    } else {
        outputDiv.textContent = 'No items to display.';
    }
}