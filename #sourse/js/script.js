"use strict"

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

  const parallax = document.querySelector('.parallax');
  if (parallax) {
    const content = document.querySelector('.content__container');
    const clouds = document.querySelector('.images-parallax__clouds');
    const mountains = document.querySelector('.images-parallax__mountains');
    const human = document.querySelector('.images-parallax__human');

    // Коеффиценты
    const forCloud = 40;
    const forMountains = 20;
    const forHuman = 10;

    // Скорость анимации
    const speed = 0.05;

    //Обьявление переменных
    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;

    function setMouseParalaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);

      // передача стилей
      clouds.style.cssText = `transform: translate(${-positionX / forCloud}%,${-positionY / forCloud}%);`;
      mountains.style.cssText = `transform: translate(${positionX / forMountains}%,${positionY / forMountains}%);`;
      human.style.cssText = `transform: translate(${-positionX / forHuman}%,${-positionY / forHuman}%);`;

      requestAnimationFrame(setMouseParalaxStyle);
    }
    setMouseParalaxStyle();

    parallax.addEventListener("mousemove", function (e) {
      // Получение ширины и высоты блока
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeigth = parallax.offsetHeight;

      // Ноль по середине
      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeigth / 2;

      // Получение в процентах
      coordXprocent = coordX / parallaxWidth * 100;
      coordYprocent = coordY / parallaxHeigth * 100;
    });
  }
}