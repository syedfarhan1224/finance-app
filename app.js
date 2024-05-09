let income = 0;
let expense = 0;
let transactions = [];

function addIncome() {
  const incomeInput = parseFloat(document.getElementById("income").value);
  income += incomeInput;
  document.getElementById("totalIncome").textContent = income;
  updateSavings();
}

function addExpense() {
  const expenseInput = parseFloat(document.getElementById("expense").value);
  expense += expenseInput;
  document.getElementById("totalExpense").textContent = expense;
  updateSavings();
}

function saveTransaction() {
  const timestamp = new Date().toLocaleString();
  const transaction = {
    timestamp: timestamp,
    income: income,
    expense: expense,
  };
  transactions.push(transaction);
  updateTransactionHistory();
  updateSavings();
}

// function updateTransactionHistory() {
//     const transactionList = document.getElementById('transactionList');
//     transactionList.innerHTML = '';
//     transactions.forEach(transaction => {
//         const li = document.createElement('li');
//         li.textContent = Timestamp: ${transaction.timestamp}, Income: ${transaction.income}, Expense: ${transaction.expense};
//         transactionList.appendChild(li);
//     });
// }

function updateSavings() {
  const savings = income - expense;
  document.getElementById("totalSavings").textContent = savings;
}
