// TABS
var tabLink = document.querySelectorAll('.tabs a');

for (var i = 0; i < tabLink.length; i++) {
  tabLink[i].addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('.tabs-content__tab.active').classList.remove('active');
    document.querySelector('.tabs a.active').classList.remove('active');
    event.target.classList.add('active');
    document.querySelector(`.${event.target.dataset.open}`).classList.add('active');
  });
}

// BARRE DE NAVIGATION

const btn_menu = document.querySelector(".btn-menu");
      const side_bar = document.querySelector(".sidebar");

      btn_menu.addEventListener("click", function () {
        side_bar.classList.toggle("expand");
        changebtn();
      });

      function changebtn() {
        if (side_bar.classList.contains("expand")) {
          btn_menu.classList.replace("bx-menu", "bx-menu-alt-right");
        } else {
          btn_menu.classList.replace("bx-menu-alt-right", "bx-menu");
        }
      }