const calcBtn = document.getElementById("calc-btn");
const billInput = document.getElementById("bill-amount");
const tipInput = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total");

function calculateAmount() {
	const billVal = billInput.value;
	const tipVal = tipInput.value;
	const totalVal = billVal * (1 + tipVal / 100);
	totalAmount.innerText = `$${totalVal.toFixed(2)}`;
	totalAmount.style.fontSize = "18px";
	totalAmount.style.fontWeight = "bold";
	totalAmount.style.paddingLeft = "10px";
	totalAmount.style.marginTop = "10px";
}

calcBtn.addEventListener("click", calculateAmount);
