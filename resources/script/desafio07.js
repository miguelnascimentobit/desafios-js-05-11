let form = document.querySelector("form");
let p = document.querySelector("p");
let inputnome = document.querySelector("#nome");
let inputNum1 = document.querySelector("#num1");
let inputNum2 = document.querySelector("#num2");
let inputNum3 = document.querySelector("#num3");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let nome = inputnome.value;
    let num1= Number(inputNum1.value);
    let num2 = Number(inputNum2.value);
    let num3 = Number(inputNum3.value);
    let media = (num1 + num2 + num3) /3;
    if(media <7){
    p.innerText= "Olá, "+ nome+ ", você reprovou."
    p.style.color="red"
    }
    else{
        p.innerText= "Olá, "+ nome+ ", você passou."
        p.style.color="green"
    }
   
})