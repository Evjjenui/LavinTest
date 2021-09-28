const menuOpen = () => {
  const body = document.querySelector('body');
  const menuBtn = document.getElementById('menu-btn');
  
  menuBtn.addEventListener('click', () => {
    body.classList.toggle('opened');
  })
}

const headerScroll = () => {
  const header = document.getElementsByClassName('header')[0];

  if (window.pageYOffset >= 1) {
    header.classList.add('header__scroll');
  } else {
    header.classList.remove('header__scroll');
  }
};

const langList = () => {
  const langBtn = document.getElementById('lang-btn');
  
  langBtn.addEventListener('click', () => {
    langBtn.classList.toggle('active');
  })
};


document.addEventListener('DOMContentLoaded', () => {
  langList();
  menuOpen();

  document.addEventListener('scroll', () => {
    headerScroll();
  });
});
