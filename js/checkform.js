const nameRegExp = new RegExp(/^[а-яА-Яа-яА-ЯїЇіІa-zA-Z ]{2,30}$/),
	  phoneRegExp = new RegExp(/^(050|066|067|098|097|096|068|039|063|093|099|095){1}[0-9]{7}$/);
	//   emailRegExp = new RegExp(/^[a-zA-Z0-9.]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/),
	//   dateRegExp = new RegExp(/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/),
	//   timeRegExp = new RegExp(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/);

const fioInput = document.getElementById("fio-input"),
	phoneInput = document.getElementById("phone-input");
	//emailInput = document.getElementById("email-input"),
	// dateInput = document.getElementById("date-input"),
	// timeInput = document.getElementById("time-input");

let fioErrorMessage = document.getElementById('fio-error-message'),
	phoneErrorMessage = document.getElementById('phone-error-message'),
	// emailErrorMessage = document.getElementById('email-error-message'),
	// dateErrorMessage = document.getElementById('date-error-message'),
	// timeErrorMessage = document.getElementById('time-error-message');

const button = document.querySelector("button[type=submit]");

function customizeInput(valid, el, errorMSGContainer, regExpFailMessage, emptyStringMessage) {
	if (valid == "invalid") {
		el.classList.add('invalid');
		errorMSGContainer.style.display = "block";
		errorMSGContainer.textContent = regExpFailMessage;
		if (el.value == "") {
			el.classList.add('invalid');
			errorMSGContainer.textContent = emptyStringMessage;
			return false;
		}
		return false;
	} else {
		el.classList.remove('invalid');
		errorMSGContainer.textContent = "";
		errorMSGContainer.style.display = "none";
	}
}

function validateInputs() {
	
	let emptyStringMSG = "Данное поле не может быть пустым!";
	
	// if (!emailRegExp.test(emailInput.value)) {
	// 	let regexpErr = "Email введён некорректно!";		
	// 	customizeInput("invalid",emailInput, emailErrorMessage, regexpErr, emptyStringMSG);
	// 	return false;
	// } else {
	// 	customizeInput("valid",emailInput, emailErrorMessage, "", "");
	// }
	
	if (!nameRegExp.test(fioInput.value)) {		
		let regexpErr = "Данные введены некорректно!";
		customizeInput("invalid",fioInput, fioErrorMessage, regexpErr, emptyStringMSG);
		return false;
	} else {
		customizeInput("valid",fioInput, fioErrorMessage, "", "");	
	}
	
	if (!phoneRegExp.test(phoneInput.value)) {
		let regexpErr = "Телефон введён некорректно!";
		customizeInput("invalid", phoneInput, phoneErrorMessage, regexpErr, emptyStringMSG);
		return false;
	} else {
		customizeInput("valid", phoneInput, phoneErrorMessage, "", "");	
	}
	
	// if (!dateRegExp.test(dateInput.value)) {
	// 	let regexpErr = "Дата введена некорректно!";
	// 	customizeInput("invalid", dateInput, dateErrorMessage, regexpErr, emptyStringMSG);
	// 	return false;
	// } else {
	// 	customizeInput("valid", dateInput, dateErrorMessage, "", "");	
	// }
	
	// if (!timeRegExp.test(timeInput.value)) {
	// 	let regexpErr = "Время введено некорректно!";
	// 	customizeInput("invalid", timeInput, timeErrorMessage, regexpErr, emptyStringMSG);
	// 	return false;
	// } else {
	// 	customizeInput("valid", timeInput, timeErrorMessage, "", "");		
	// }
	return true;
}

function sendForm(event) {
	if (!validateInputs()) {
		event.preventDefault();
	} else {
		document.querySelector('form').style.display = "none";
		document.querySelector('.submitted').style.display = "flex";
		console.log(
			`Имя Фамилия: ${fioInput.value}\nТелефон: ${phoneInput.value}\n` //Email: ${emailInput.value}\nДата: ${dateInput.value}\nВремя: ${timeInput.value}
		);
	}
}

button.addEventListener("click", sendForm);