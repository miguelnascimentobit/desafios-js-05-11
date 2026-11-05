let escolhas = document.querySelector("#cores")
let p = document.querySelector("p")


escolhas.addEventListener("change", ()=>{
let selecionado = escolhas.value;
if(selecionado === "amarelo"){
    p.style.color= "yellow"
}
else if(selecionado === "vermelho"){
    p.style.color= "red"
}
else if(selecionado === "azul"){
    p.style.color= "blue"
}
})