const hamburger = document.querySelector('#hamburger')
const overCanvas = document.querySelector('nav')
hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('burger-aktif')
    overCanvas.classList.toggle('showCanvas')
})

// nav fixed
window.onscroll = function(){
    const header  = document.querySelector('#header')
    const navfix  = header.offsetTop
console.log(navfix)
if(window.pageYOffset > navfix){
    header.classList.add('nav-fixed')
}else{
    header.classList.remove('nav-fixed')
}
}