let mais = document.querySelector("#mais");
let menos = document.querySelector("#menos");
let p = document.querySelector("p");
let num = 0;
p.innerText= num;
mais.addEventListener("click",(e)=>{
    e.preventDefault();
    num +=1;
    p.innerText= num;
});
menos.addEventListener("click",(e)=>{
    e.preventDefault();
    num -=1;
    p.innerText= num;
})
