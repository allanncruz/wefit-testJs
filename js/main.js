// Transformar elemento navbar.
var navVerticalToHorizontal = document.querySelector(".btn-group-vertical");

navVerticalToHorizontal.classList.remove("btn-group-vertical");
navVerticalToHorizontal.classList.add("btn-group-horizontal");


// Transformar padrão de cores e posição do elemento jumbotron.
var jumbotronModify = document.querySelector(".jumbotron");
var jumbotronModifyButton = document.querySelector(".jumbotron .btn-primary");

jumbotronModify.classList.add("text-white", "text-right", "bg-secondary");
jumbotronModifyButton.classList.remove("btn-primary");
jumbotronModifyButton.classList.add("btn-success");


// Adicionar mais elementos no list group, remover e adicionar class active.
var RemoveActiveItem = document.querySelector(".active");

RemoveActiveItem.classList.remove("active");

var addToListFor = document.createElement("li");
addToListFor.textContent = "Quarto item";
addToListFor.setAttribute("class", "list-group-item active",);

var addToListFive = document.createElement("li");
addToListFive.textContent = "Quinto item";
addToListFive.setAttribute("class", "list-group-item");

var containerListGroup = document.querySelector(".list-group");

containerListGroup.appendChild(addToListFor);
containerListGroup.appendChild(addToListFive);


// Modificar posições dos cards e adicionar botão verde no segundo elemento.
var listaCards = document.querySelectorAll('.col-lg-3');
var cardPosicao1 = listaCards[0];
var cardPosicao2 = listaCards[1];
var cardPosicao3 = listaCards[2];
var cardPosicao4 = listaCards[3];

cardPosicao1.classList.add("order-2");
cardPosicao2.classList.add("order-4");
cardPosicao3.classList.add("order-3");
cardPosicao4.classList.add("order-1");

var cardButtonSuccess = document.querySelector(".order-2 .btn-primary");

cardButtonSuccess.classList.remove("btn-primary");
cardButtonSuccess.classList.add("btn-success");
