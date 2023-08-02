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

// тап для мобілок
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const projectCard = document.getElementById("projectCard");

  const hammer = new Hammer(projectCard);
  hammer.on("tap", function (event) {
    // Ваш код, який виконується при тапі на елемент projectCard
    // Наприклад, відкриття посилання або показ додаткової інформації
  });
});



// Paginator
document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".project-card");
  const itemsPerPage = 4;
  let currentPage = 1;

  function showPage(pageNumber) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    projects.forEach((project, index) => {
      if (index >= startIndex && index < endIndex) {
        project.classList.remove("hidden");
      } else {
        project.classList.add("hidden");
      }
    });
  }

  function updatePaginationButtons() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (currentPage === 1) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }

    if (currentPage === Math.ceil(projects.length / itemsPerPage)) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }
  }

  function goToPrevPage() {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
      updatePaginationButtons();
    }
  }

  function goToNextPage() {
    if (currentPage < Math.ceil(projects.length / itemsPerPage)) {
      currentPage++;
      showPage(currentPage);
      updatePaginationButtons();
    }
  }

  // Додайте обробник подій до кнопок пагінатора
  const prevBtn = document.getElementById("prevBtn");
  prevBtn.addEventListener("click", goToPrevPage);

  const nextBtn = document.getElementById("nextBtn");
  nextBtn.addEventListener("click", goToNextPage);

  // Показати першу сторінку при завантаженні сторінки
  showPage(currentPage);
  updatePaginationButtons();
});