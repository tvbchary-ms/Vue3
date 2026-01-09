let count = 0;

const countHeader = document.getElementById("count")
const countAddBtn = document.getElementById("add")
const countSubBtn = document.getElementById("subtract")

countHeader.innerHTML = count

countAddBtn.addEventListener("click",()=>{
 count++;
 countHeader.innerText=count
})

countSubBtn.addEventListener("click",()=>{
    count--;
    countHeader.innerHTML=count

})