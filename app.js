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

// mail
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("msg").value;

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => {
        console.log("Дані успішно надіслані");
        // Можна вивести повідомлення про успішне надсилання або перенаправити на іншу сторінку
      })
      .catch((error) => {
        console.error("Помилка надсилання даних:", error);
        // Можна вивести повідомлення про помилку або зробити додаткові дії
      });
  });

// Bootstrap
import { Toast } from "bootstrap.esm.min.js";

Array.from(document.querySelectorAll(".toast")).forEach(
  (toastNode) => new Toast(toastNode)
);
