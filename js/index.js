const hamburgermenu = document.querySelector('.hamburgermenu');
const list = document.querySelector('.list');
const startbtn = document.querySelector('.startbtn');
const contentList = document.querySelectorAll('.contentOne');

hamburgermenu.addEventListener('click',()=>{
    list.classList.toggle('active');
    hamburgermenu.classList.toggle('active');
})
startbtn.addEventListener('click',()=>{
    list.classList.toggle('active');
    hamburgermenu.classList.toggle('active');
})
document.addEventListener('scroll',()=>{
    for(let i = 0; i < contentList.length; i++){
      const elementBounce = contentList[i].getBoundingClientRect().top
            + contentList[i].clientHeight * .6;
      if(innerHeight > elementBounce){
         contentList[i].classList.add('show');
      }
    }
})