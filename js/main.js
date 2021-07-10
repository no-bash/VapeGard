



//scroll
 
const headerNavBtn = document.querySelector('.header__nav-btn');

const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const assortiment = document.querySelector('#assortiment');
const headerList = document.querySelector('.header__list')


headerList.addEventListener('click', event=>{
  const target = event.target;
  if(target.textContent === 'О нас'){
    scrollTo(about);
  }
})


headerList.addEventListener('click', event=>{
  const target = event.target;
  console.log(target);
  if(target.textContent == 'Контакты'){
    scrollTo(contact)
  }
})


headerList.addEventListener('click', event=>{
  const target = event.target;
  console.log(target);
  if(target.textContent == 'Ассортимент'){
    scrollTo(assortiment)
  }
})


function scrollTo(element){
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}