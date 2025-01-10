const exchangeRates = {
    USD: { USD: 1, EUR: 0.85, GBP: 0.74 },
    EUR: { USD: 1.18, EUR: 1, GBP: 0.87 },
    GBP: { USD: 1.36, EUR: 1.15, GBP: 1 }
  };
  
  document.getElementById('convert-button').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
  
    if (isNaN(amount) || amount <= 0) {
      document.getElementById('result').textContent = 'Please enter a valid amount.';
      return;
    }
  
    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);
  
    document.getElementById('result').textContent = 
      `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  });
  