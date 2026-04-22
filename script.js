// Exercício 1
let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function() {
    alert("Botão pressionado");
});


// Exercício 2
let btn2 = document.getElementById("btn2");
let texto2 = document.getElementById("texto2");

btn2.addEventListener("click", function() {
    texto2.textContent = "Texto alterado";
});


// Exercício 3
let btn3 = document.getElementById("btn3");

btn3.addEventListener("click", function() {
    let nome = document.getElementById("nome").value;
    alert(nome);
});


// Exercício 4
let btn4 = document.getElementById("btn4");
let lista = document.getElementById("lista");
let contador = 1;

btn4.addEventListener("click", function() {
    let li = document.createElement("li");
    li.textContent = "Item " + contador;
    lista.appendChild(li);
    contador++;
});


// Exercício 5
let btn5 = document.getElementById("btn5");
let div5 = document.getElementById("div5");

btn5.addEventListener("click", function() {
    div5.style.backgroundColor = "blue";
});


// Exercício 6
let btn6 = document.getElementById("btn6");
let div6 = document.getElementById("div6");
let cor = true;

btn6.addEventListener("click", function() {
    if (cor) {
        div6.style.backgroundColor = "red";
    } else {
        div6.style.backgroundColor = "green";
    }
    cor = !cor;
});


// Exercício 7
let btn7 = document.getElementById("btn7");
let cliques = 0;

btn7.addEventListener("click", function() {
    cliques++;
    console.log("Quantidade de cliques:", cliques);
});