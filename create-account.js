function createAccount(pin, amount = 0) {
    let setPin = pin;
    let setAmount = amount;
return {
    checkBalance: function(inputPin) {
        return inputPin === setPin ? `$${setAmount}` : "Invalid PIN.";  
    },
    deposit: function(inputPin, amount) {
        if (inputPin !== setPin) {
            return "Invalid PIN."
        } else {
            setAmount += amount;
            return `Successfully deposited $${amount}. Current balance: $${setAmount}.`;
        }
    },
    withdraw: function(inputPin, amount) {
        if (inputPin !== setPin) {
            return "Invalid PIN."
        } else if (amount <= setAmount) {
            setAmount -= amount;
            return `Successfully withdrew $${amount}. Current balance: $${setAmount}.`;
        } else {
            return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
    },
    changePin: function(oldPin, newPin) {
        if (oldPin !== setPin) {
            return "Invalid PIN. Cannot change pin."
        } else {
            setPin = newPin;
            return "PIN successfully changed!";
        }
    }
};
}

module.exports = { createAccount };
