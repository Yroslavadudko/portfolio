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



