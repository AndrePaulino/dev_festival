const nome = window.localStorage.getItem("nome");
const email = window.localStorage.getItem("email");
const ticketQuantity = window.localStorage.getItem("ticketQuantity");

const nomeLabel = document.getElementById("nome");
const emailLabel = document.getElementById("email");
const ticketQuantityLabel = document.getElementById("ticket-quantity");

nomeLabel.innerText = nome;
emailLabel.innerText = email;
ticketQuantityLabel.innerText = ticketQuantity;
