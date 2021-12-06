function handleEMIForm() {
    
    let maxTenure = 240; //facility can't be more than 20 years
    let formError = false;

    // Get all elements
    amount = document.getElementById('loan_amount').value;
    tenure = document.getElementById('tenure').value;
    rate = document.getElementById('interest_rate').value;

    amountError = document.getElementById('loan_amount_err');
    tenureError = document.getElementById('tenure_error');
    rateError = document.getElementById('rate_error');
    
    // validations
    if (amount <= 0) {
        amountError.style.display = 'block';
        amountError.innerHTML = "Amount should be greater than zero";
        formError = true;
    } else {
        amountError.style.display = 'none';
    }
    if (tenure < 1 || tenure > 240) {
        tenureError.style.display = 'block';
        tenureError.innerHTML = "Tenure can't be less than 1 months or more than 240";
        formError = true;
    } else {
        tenureError.style.display = 'none';
    }
    if (rate <= 0 || rate > 100) {
        rateError.style.display = 'block';
        rateError.innerHTML = "Please enter value between 1 and 100";
        formError = true;
    } else {
        rate = rate / 100 / 12;
        rateError.style.display = 'none';
    }

    //calculate emi
    emi = document.getElementById('emi');
    if(!formError) {    
        emi.innerHTML = getEMI(amount, tenure, rate);
    } else {
        emi.innerHTML = "#Error";
    }

}

function getEMI(amount, tenure, rate) {
    let emi = (amount * rate * Math.pow((1+rate),tenure)) / (Math.pow((1+rate),tenure)-1);
    return ((Math.round(emi*100)/100).toFixed(2));
}