let form = document.querySelector("form")
let inputPeso =document.querySelector("#peso")
let inputAltura =document.querySelector("#altura")
let p= document.querySelector("p");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);
    let imc = peso/(altura*altura);
    imc = imc.toFixed(2)
    p.innerText= "Seu indíce e massa corporal é "+ imc;
});