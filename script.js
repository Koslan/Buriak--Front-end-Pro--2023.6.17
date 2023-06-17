let users = [
    { "index": 0, "isActive": true, "balance": "$2,226.60", "name": "Eugenia Sawyer", "gender": "female", "phone": "+1 (840) 583-3207", "address": "949 John Street, Rose, Puerto Rico, 1857" },
    { "index": 1, "isActive": true, "balance": "$2,613.77", "name": "Pauline Gallegos", "gender": "female", "phone": "+1 (985) 593-3328", "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857" },
    { "index": 2, "isActive": false, "balance": "$3,976.41", "name": "Middleton Chaney", "gender": "male", "phone": "+1 (995) 591-2478", "address": "807 Fleet Walk, Brutus, Arkansas, 9783" },
    { "index": 3, "isActive": true, "balance": "$1,934.58", "name": "Burns Poole", "gender": "male", "phone": "+1 (885) 559-3422", "address": "730 Seba Avenue, Osage, Alabama, 6290" },
    { "index": 4, "isActive": true, "balance": "$3,261.65", "name": "Mcfadden Horne", "gender": "male", "phone": "+1 (942) 565-3988", "address": "120 Scholes Street, Kirk, Michigan, 1018" },
    { "index": 5, "isActive": false, "balance": "$1,790.56", "name": "Suzette Lewis", "gender": "female", "phone": "+1 (837) 586-3283", "address": "314 Dunne Place, Bawcomville, Guam, 9053" }
];

function generateTable(data) {
    let tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    data.forEach(user => {
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${user.index}</td>
        <td>${user.isActive}</td>
        <td>${user.balance}</td>
        <td>${user.name}</td>
        <td>${user.gender}</td>
        <td>${user.phone}</td>
        <td>${user.address}</td>
      `;
        tableBody.appendChild(row);
    });
}

function filterUsers() {
    let input = document.getElementById('balance-input').value;
    let filteredUsers = users.filter(user => parseFloat(user.balance.replace(',', '').slice(1)) > parseFloat(input));
    generateTable(filteredUsers);
}

function calculateSum() {
    let sum = users.reduce((acc, user) => acc + parseFloat(user.balance.replace(',', '').slice(1)), 0);
    document.getElementById('sum-label').textContent = `Sum of Balances: $${sum.toFixed(2)}`;
}


generateTable(users);
calculateSum();