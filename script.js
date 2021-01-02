let btnM = document.querySelectorAll("button")[0];
let btnP = document.querySelectorAll("button")[1];
let h3 = document.querySelector("h3");
let count = 0;
btnM.onclick = ()=>{
    count-=2;
    h3.innerHTML = count;
}
btnP.onclick = ()=>{
    count+=2;
    h3.innerHTML = count;
}