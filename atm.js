const correctPIN = "1510";
let balance = 250; // Starting balance

const pinEl = document.getElementById("pin");
const actionEl = document.getElementById("action");
const amountEl = document.getElementById("amount");
const messageEl = document.getElementById("message");

function showMessage(text) {
    messageEl.innerText = text;
}

document.getElementById("run").addEventListener("click", () => {
    const pin = pinEl.value.trim();
    const action = actionEl.value;
    const amount = Number(amountEl.value);

    // PIN Check
    if (pin !== correctPIN) {
        showMessage("Wrong PIN, try again.");
        return;
    }

    // Check Balance
    if (action === "balance") {
        showMessage(`Bilanci juaj aktual është: €${balance}`);
    }

    // Deposit
    else if (action === "deposit") {
        if (!amountEl.value || amount <= 0) {
            showMessage("Jep një shumë më të madhe se 0.");
        } else {
            balance += amount;
            showMessage(`Depozita u krye me sukses. Bilanci i ri: €${balance}`);
        }
    }

    // Withdraw
    else if (action === "withdraw") {
        if (!amountEl.value || amount <= 0) {
            showMessage("Jep një shumë më të madhe se 0.");
        } 
        else if (amount > balance) {
            showMessage("Fonde të pamjaftueshme.");
        } 
        else {
            balance -= amount;
            showMessage(`Tërheqja u krye me sukses. Bilanci i ri: €${balance}`);
        }
    }
});

// Reset button
document.getElementById("reset").addEventListener("click", () => {
    pinEl.value = "";
    amountEl.value = "";
    actionEl.value = "balance";
    showMessage("Wecome! Enter a PIN and choose an action");
});


