let btn = document.querySelector("button");
let h3 = document.querySelector("h3");
let count = 0;
btn.onclick = ()=>{
    h3.innerHTML = ++count;
}