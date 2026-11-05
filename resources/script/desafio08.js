let form= document.querySelector("form");
let inputnum = document.querySelector("#num");
let p =document.querySelector("p");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let num= Number(inputnum.value);
    let antecessor = num -1;
    let sucessor = num +1;
    p.innerText= "O antecesor de "+num+" é "+antecessor+" e o sucessor é "+sucessor;
})