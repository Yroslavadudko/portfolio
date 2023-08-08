// active link
const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section");

let activeLink = 0;

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Це заборонить перехід за посиланням

    const newIndex = parseInt(link.getAttribute("data-index"), 10);

    if (activeLink !== newIndex) {
      links[activeLink].classList.remove("active");
      link.classList.add("active");
      sections[activeLink].classList.remove("active");

      setTimeout(() => {
        activeLink = newIndex;
        sections[newIndex].classList.add("active");
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

// touch tap
document.addEventListener("DOMContentLoaded", function () {
  function handleTapEvent(event) {
    const projectContent =
      event.currentTarget.querySelector(".project-content");
    const projectBtnGrp = event.currentTarget.querySelector(".project-btn-grp");

    if (projectContent && projectBtnGrp) {
      projectContent.classList.toggle("visible");
      projectBtnGrp.classList.toggle("visible");
    }
  }

  // We add event handlers on touch events for all projects
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((projectCard) => {
    const hammer = new Hammer(projectCard);
    hammer.on("tap", handleTapEvent);
  });

  // project-1
  const projectCard1 = document.getElementById("projectCard1");
  const projectContent1 = projectCard1.querySelector(".project-content");
  const projectBtnGrp1 = projectCard1.querySelector(".project-btn-grp");

  projectCard1.addEventListener("mouseenter", function () {
    projectContent1.style.opacity = "1";
    projectBtnGrp1.style.opacity = "1";
  });

  projectCard1.addEventListener("mouseleave", function () {
    projectContent1.style.opacity = "0";
    projectBtnGrp1.style.opacity = "0";
  });

  // project-2
  const projectCard2 = document.getElementById("projectCard2");
  const projectContent2 = projectCard2.querySelector(".project-content");
  const projectBtnGrp2 = projectCard2.querySelector(".project-btn-grp");

  projectCard2.addEventListener("mouseenter", function () {
    projectContent2.style.opacity = "1";
    projectBtnGrp2.style.opacity = "1";
  });

  projectCard2.addEventListener("mouseleave", function () {
    projectContent2.style.opacity = "0";
    projectBtnGrp2.style.opacity = "0";
  });

  // project-3
  const projectCard3 = document.getElementById("projectCard3");
  const projectContent3 = projectCard3.querySelector(".project-content");
  const projectBtnGrp3 = projectCard3.querySelector(".project-btn-grp");

  projectCard3.addEventListener("mouseenter", function () {
    projectContent3.style.opacity = "1";
    projectBtnGrp3.style.opacity = "1";
  });

  projectCard3.addEventListener("mouseleave", function () {
    projectContent3.style.opacity = "0";
    projectBtnGrp3.style.opacity = "0";
  });

  // project-4
  const projectCard4 = document.getElementById("projectCard4");
  const projectContent4 = projectCard4.querySelector(".project-content");
  const projectBtnGrp4 = projectCard4.querySelector(".project-btn-grp");

  projectCard4.addEventListener("mouseenter", function () {
    projectContent4.style.opacity = "1";
    projectBtnGrp4.style.opacity = "1";
  });

  projectCard4.addEventListener("mouseleave", function () {
    projectContent4.style.opacity = "0";
    projectBtnGrp4.style.opacity = "0";
  });

  // project-5
  const projectCard5 = document.getElementById("projectCard5");
  const projectContent5 = projectCard5.querySelector(".project-content");
  const projectBtnGrp5 = projectCard5.querySelector(".project-btn-grp");

  projectCard5.addEventListener("mouseenter", function () {
    projectContent5.style.opacity = "1";
    projectBtnGrp5.style.opacity = "1";
  });

  projectCard5.addEventListener("mouseleave", function () {
    projectContent5.style.opacity = "0";
    projectBtnGrp5.style.opacity = "0";
  });

  // project-6
  const projectCard6 = document.getElementById("projectCard6");
  const projectContent6 = projectCard6.querySelector(".project-content");
  const projectBtnGrp6 = projectCard6.querySelector(".project-btn-grp");

  projectCard6.addEventListener("mouseenter", function () {
    projectContent6.style.opacity = "1";
    projectBtnGrp6.style.opacity = "1";
  });

  projectCard6.addEventListener("mouseleave", function () {
    projectContent6.style.opacity = "0";
    projectBtnGrp6.style.opacity = "0";
  });

  // project-7
  const projectCard7 = document.getElementById("projectCard7");
  const projectContent7 = projectCard7.querySelector(".project-content");
  const projectBtnGrp7 = projectCard7.querySelector(".project-btn-grp");

  projectCard7.addEventListener("mouseenter", function () {
    projectContent7.style.opacity = "1";
    projectBtnGrp7.style.opacity = "1";
  });

  projectCard7.addEventListener("mouseleave", function () {
    projectContent7.style.opacity = "0";
    projectBtnGrp7.style.opacity = "0";
  });

  // project-8
  const projectCard8 = document.getElementById("projectCard8");
  const projectContent8 = projectCard8.querySelector(".project-content");
  const projectBtnGrp8 = projectCard8.querySelector(".project-btn-grp");

  projectCard8.addEventListener("mouseenter", function () {
    projectContent8.style.opacity = "1";
    projectBtnGrp8.style.opacity = "1";
  });

  projectCard8.addEventListener("mouseleave", function () {
    projectContent8.style.opacity = "0";
    projectBtnGrp8.style.opacity = "0";
  });

  // project-9
  const projectCard9 = document.getElementById("projectCard9");
  const projectContent9 = projectCard9.querySelector(".project-content");
  const projectBtnGrp9 = projectCard9.querySelector(".project-btn-grp");

  projectCard9.addEventListener("mouseenter", function () {
    projectContent9.style.opacity = "1";
    projectBtnGrp9.style.opacity = "1";
  });

  projectCard9.addEventListener("mouseleave", function () {
    projectContent9.style.opacity = "0";
    projectBtnGrp9.style.opacity = "0";
  });

  // project-10
  const projectCard10 = document.getElementById("projectCard10");
  const projectContent10 = projectCard10.querySelector(".project-content");
  const projectBtnGrp10 = projectCard10.querySelector(".project-btn-grp");

  projectCard10.addEventListener("mouseenter", function () {
    projectContent10.style.opacity = "1";
    projectBtnGrp10.style.opacity = "1";
  });

  projectCard10.addEventListener("mouseleave", function () {
    projectContent10.style.opacity = "0";
    projectBtnGrp10.style.opacity = "0";
  });

  // project-11
  const projectCard11 = document.getElementById("projectCard11");
  const projectContent11 = projectCard11.querySelector(".project-content");
  const projectBtnGrp11 = projectCard11.querySelector(".project-btn-grp");

  projectCard11.addEventListener("mouseenter", function () {
    projectContent11.style.opacity = "1";
    projectBtnGrp11.style.opacity = "1";
  });

  projectCard11.addEventListener("mouseleave", function () {
    projectContent11.style.opacity = "0";
    projectBtnGrp11.style.opacity = "0";
  });

  // project-12
  const projectCard12 = document.getElementById("projectCard12");
  const projectContent12 = projectCard12.querySelector(".project-content");
  const projectBtnGrp12 = projectCard12.querySelector(".project-btn-grp");

  projectCard12.addEventListener("mouseenter", function () {
    projectContent12.style.opacity = "1";
    projectBtnGrp12.style.opacity = "1";
  });

  projectCard12.addEventListener("mouseleave", function () {
    projectContent12.style.opacity = "0";
    projectBtnGrp12.style.opacity = "0";
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

  // Add an event handler for the paginator buttons
  const prevBtn = document.getElementById("prevBtn");
  prevBtn.addEventListener("click", goToPrevPage);

  const nextBtn = document.getElementById("nextBtn");
  nextBtn.addEventListener("click", goToNextPage);

  // Show first page on page load
  showPage(currentPage);
  updatePaginationButtons();
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const projectCard = document.getElementById("projectCard");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const currentPageSpan = document.getElementById("currentPage"); // We get a link to the element where we will show the number of the current page

  let currentPage = 1; // Home page

  // Add Hammer.js event handlers to the prevBtn and nextBtn elements
  // ...

  // Функція для оновлення номеру поточної сторінки
  function updateCurrentPage() {
    currentPageSpan.textContent = currentPage; // Оновлюємо значення елементу, що показує номер поточної сторінки
  }

  // Функція, яка виконується при переході на попередню сторінку
  function goToPrevPage() {
    // Ваш код для переходу на попередню сторінку
    // ...

    // Оновлюємо номер поточної сторінки і оновлюємо його відображення
    currentPage--;
    updateCurrentPage();
  }

  // Функція, яка виконується при переході на наступну сторінку
  function goToNextPage() {
    // Ваш код для переходу на наступну сторінку
    // ...

    // Оновлюємо номер поточної сторінки і оновлюємо його відображення
    currentPage++;
    updateCurrentPage();
  }

  // Додаємо обробники подій для кнопок prevBtn і nextBtn
  prevBtn.addEventListener("click", goToPrevPage);
  nextBtn.addEventListener("click", goToNextPage);

  // Оновлюємо номер поточної сторінки при завантаженні сторінки
  updateCurrentPage();
});
