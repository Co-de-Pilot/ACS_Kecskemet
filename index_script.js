/* document.addEventListener("mousemove", function(event) {
        let body = document.body;
        let woodShaving = document.createElement('span');

        let size = Math.trunc(Math.random() * 20);
        let transformValue =Math.random() * 90;

        woodShaving.style.left = event.offsetX + 'px';
        woodShaving.style.top = event.offsetY + 'px';
        woodShaving.style.width = 10 + size + 'px';
        woodShaving.style.transform = 'rotate(' + transformValue + 'deg)';

        body.appendChild(woodShaving);
        setTimeout(function(){
            woodShaving.remove();
        }, 1000);
    }); */

/* MENU TOGGLE vezérlése */
const menuToggle = document.querySelector("nav .toggle");
const menuList = document.querySelector("nav .menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("menu-active");
  menuList.classList.toggle("menu-active");
});

/* PARALLAX vezérlése */
const parallaxTitle = document.querySelector(".parallax>h2");
const parallaxBackground = document.querySelector(
  ".parallax>img:nth-of-type(1)"
);
const parallaxForeground = document.querySelector(
  ".parallax>img:nth-of-type(2)"
);

window.addEventListener("scroll", function () {
  let scrollValue = this.window.scrollY;

  parallaxTitle.style.top = scrollValue * -1.2 + "px";
  parallaxTitle.style.left = scrollValue * -1.1 + "px";
  parallaxBackground.style.top = scrollValue * 0.7 + "px";
  parallaxForeground.style.top = scrollValue * 0.5 + "px";
});
