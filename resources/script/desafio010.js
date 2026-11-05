let inputnum = document.querySelector("#num");
let p = document.querySelector("p");
let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let num = Number(inputnum.value);
    let aleatorio= Math.floor(Math.random() * 100) + 1;
    if(aleatorio === num){
        p.innerText="Número Sorteado: "+ aleatorio+ ". Parabéns, você acertou!"
    }
     else{
        p.innerText="Número Sorteado: "+ aleatorio+ ". Infelizmente, você errou. Tente novamente!"
    }
})