const text = document.querySelector(".text")
document.querySelector(".color").addEventListener("input",(e)=>{
    text.style.color =e.target.value
})
document.querySelector(".num").addEventListener("input",(e)=>{
    text.style.fontSize =e.target.value+"px"
})
document.querySelector(".font").addEventListener("change",(e)=>{
    text.style.fontFamily =e.target.value
})