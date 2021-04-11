window.onload = function () {
	const alert = document.getElementById('alert')
	// console.log(alert)
	const inputBill = document.getElementById('countOfmoney')
	// console.log(inputBill)
	const selectTip = document.getElementById('selectService')
	// console.log(selectTip)
	const shareBill = document.getElementById('countOfpeopleBill')
	// console.log(shareBill)
	const btnCalculate = document.getElementById('btn-calculate')
	// console.log(btnCalculate)
	btnCalculate.addEventListener('click', function (e) {
		e.preventDefault()
		const valueInputBill = inputBill.value
		const valueSelectTip = selectTip.value
		const valueShareBill = shareBill.value
		// console.log(valueInputBill, valueSelectTip, valueShareBill)
		let formIsvalid = true
		if (valueInputBill === '') {
			formIsvalid = false
			inputBill.classList.add('is-invalid')
		}
		if (valueShareBill === '') {
			formIsvalid = false
			shareBill.classList.add('is-invalid')
		}
		if (formIsvalid) {
			inputBill.classList.remove('is-invalid')
			shareBill.classList.remove('is-invalid')
			alert.style.display = 'block'

			const result = (
				Math.round(((valueInputBill * valueSelectTip) / valueShareBill) * 100) /
				100
			).toFixed(2)

			alert.innerHTML = `With bill: ${valueInputBill}, by % typ ${valueSelectTip} and sharing the bill count: ${valueShareBill} result is: ${result} €`
		}
	})
	const btnReset = document.getElementById('btn-reset')
	// console.log(btnReset)
	btnReset.addEventListener('click', function (e) {
		e.preventDefault()
		inputBill.value = null
		selectTip.value = 0
		shareBill.value = null
		inputBill.classList.remove('is-invalid')
		shareBill.classList.remove('is-invalid')
		alert.style.display = 'none'
		alert.innerHTML = ''
	})
	inputBill.addEventListener('keydown', function () {
		inputBill.classList.remove('is-invalid')
	})
	shareBill.addEventListener('keydown', function () {
		shareBill.classList.remove('is-invalid')
	})
}
