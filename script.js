const cartForm = document.getElementById("cart-form");
const removeTicket = document.getElementById("remove-ticket");
const addTicket = document.getElementById("add-ticket");
const ticketNumber = document.getElementById("ticket-number");
const ticketPrice = document.getElementById("ticket-price");

cartForm.addEventListener("submit", (e) => {
	e.preventDefault();

	const nome = cartForm.nome.value;
	const email = cartForm.email.value;
	const ticketQuantity = ticketNumber.innerText;

	window.localStorage.setItem("nome", nome);
	window.localStorage.setItem("email", email);
	window.localStorage.setItem("ticketQuantity", ticketQuantity);

	window.location.href = "after-sale.html";
});

addTicket.addEventListener("click", (e) => {
	e.preventDefault();

	ticketNumber.innerText = parseInt(ticketNumber.innerText) + 1;
	ticketPrice.innerText = parseInt(ticketNumber.innerText) * 90;
});

removeTicket.addEventListener("click", (e) => {
	e.preventDefault();

	if (parseInt(ticketNumber.innerText) !== 1) {
		ticketNumber.innerText = parseInt(ticketNumber.innerText) - 1;
		ticketPrice.innerText = parseInt(ticketNumber.innerText) * 90;
	}
});
