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
// document
//   .querySelector(".contact-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const message = document.getElementById("msg").value;

//     const formData = {
//       name: name,
//       email: email,
//       message: message,
//     };

//     fetch("/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: new URLSearchParams(formData).toString(),
//     })
//       .then((response) => {
//         console.log("Data sent successfully");
//       })
//       .catch((error) => {
//         console.error("Error sending data:", error);
//       });
//   });

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("msg").value;

    const data = {
      name: name,
      email: email,
      msg: msg,
    };

    // Викликаємо функцію для надсилання даних форми
    submitFormData(data);
  });

  function submitFormData(data) {
    // Ваша логіка для надсилання даних форми за допомогою AJAX
    // Наприклад, використовуйте fetch або XMLHttpRequest для відправлення даних на сервер
    // Тут ви також можете додати логіку для обробки успішного відправлення даних
    // наприклад, відобразити повідомлення про успішну відправку або очистити поля форми.

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data).toString(),
    })
      .then((response) => {
        console.log("Data sent successfully");
        // Очищаємо поля форми після успішної відправки
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("msg").value = "";
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  }
});

