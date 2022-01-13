window.onload = function () {
  //ibg
  function ibg() {
    let ibg = document.querySelectorAll("._ibg");
    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
        ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
    }
  }
  ibg();

  //------------------------------//

  const iconMenu = document.querySelector('.icon-menu');
  const body = document.querySelector('body');
  const headerContent = document.querySelector('.header__content');
  const transform = document.querySelectorAll('._transform');

  iconMenu.addEventListener('click', function () {
    body.classList.toggle('_lock');
    headerContent.classList.toggle('_active');
    iconMenu.classList.toggle('_active');
    if (transform.length > 0) {
      for (let i = 0; i < transform.length; i++) {
        if (document.querySelector('.icon-menu._active'))
          transform[i].classList.add("_none");
        else
          transform[i].classList.remove("_none");
      }
    }
  })

  //header
  const headerElement = document.querySelector('.header');

  const callback = function (enatries, observer) {
    if (enatries[0].isIntersecting) {
      headerElement.classList.remove('_scroll');
    } else {
      headerElement.classList.add('_scroll');
    }
  }
  const headerObserver = new IntersectionObserver(callback);
  headerObserver.observe(headerElement);

}