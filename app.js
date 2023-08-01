// active link
const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section");

let activeLink = 0;

links.forEach((link, i) => {
  link.addEventListener("click", () => {
    if (activeLink != i) {
      links[activeLink].classList.remove("active");
      link.classList.add("active");
      sections[activeLink].classList.remove("active");

      setTimeout(() => {
        activeLink = i;
        sections[i].classList.add("active");
      }, 1000);
    }
  });
});

// URL new page
function redirectTo(url) {
  window.open(url, "_blank");
}

// download CV new page
function openResume() {
  window.open("./img/Mykola_QA.pdf", "_blank");
}


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const projectCard = document.getElementById("projectCard");

  // Додайте обробник подій Hammer.js до елемента projectCard
  const hammer = new Hammer(projectCard);
  hammer.on("tap", function (event) {
    // Ваш код, який виконується при тапі на елемент projectCard
    // Наприклад, відкриття посилання або показ додаткової інформації
  });

  // Інші функції і обробники подій залишаються без змін
  // ...
});

