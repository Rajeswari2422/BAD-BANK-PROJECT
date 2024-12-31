document.addEventListener("DOMContentLoaded", () => {
    const balanceDisplay = document.getElementById("balance");
    let balance = parseFloat(localStorage.getItem("balance")) || 0;
    balanceDisplay.textContent = `₹${balance.toFixed(2)}`;

    const form = document.getElementById("depositForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const amount = parseFloat(document.getElementById("amount").value);
        if (amount > 0) {
            balance += amount;
            localStorage.setItem("balance", balance);
            balanceDisplay.textContent = `₹${balance.toFixed(2)}`;
            alert(`Deposit successful! Your new balance is ₹${balance.toFixed(2)}`);
        } else {
            alert("Please enter a valid amount");
        }
    });
});
