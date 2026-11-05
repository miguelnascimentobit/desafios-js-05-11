    let formulario= document.querySelector("form")
    let inputn1 = document.querySelector("#n1")
    let inputn2 =document.querySelector("#n2")
    let p = document.querySelector("p")
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    let n1 = Number(inputn1.value);
    let n2 = Number (inputn2.value);
    if(n1 > n2){
        p.innerText ="O maior número é ".concat(n1);
    }
    else if(n2 > n1){
        p.innerText = "O maior número é ".concat(n2);
    }
})
