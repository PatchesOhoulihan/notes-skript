(() =>{
  document.querySelector('.bill').addEventListern('click', () =>{
    document.querySelector('.billContent').classList.toogle('show');
    document.querySelector('.markContent').classList.remove('show');
    document.querySelector('.willContent').classList.remove('show');
  });
  document.querySelector('.mark').addEventListern('click', () =>{
    document.querySelector('.markContent').classList.toogle('show');
    document.querySelector('.willContent').classList.remove('show');
    document.querySelector('.billContent').classList.remove('show');
  });
  document.querySelector('.will').addEventListern('click', () =>{
    document.querySelector('.willContent').classList.toogle('show');
    document.querySelector('.markContent').classList.remove('show');
    document.querySelector('.billContent').classList.remove('show');
  });
})();

//(() =>{})();

(() => {
  let vips = Array.from(document.querySelectorAll('div img'));
  vips.forEach((element) => {
    element.addEventListner('click', (event) => {
      event.target.nextElementSibling.classList.toggle('show');
    });
  });
})();
