let formulario = document.querySelector("form")
let inputiNum = document.querySelector("#num")
let p = document.querySelector("p")

formulario.addEventListener("submit", (e)=> {
    e.preventDefault();
    let num = Number(inputiNum.value)
    if(num % 2 === 0){
p.innerText = "O número " + num + " é par"
    }
    else{
        p.innerText = "O número " + num + " é impar"
    }
})