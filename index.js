const button = document.getElementById("button2");

button.addEventListener("click", function() { 
  if (document.body.style.backgroundColor === "black" || document.body.style.backgroundColor === "rgb(0, 0, 0)") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = 'black'; 

  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = 'white';
  }
});


// Получаем элементы модального окна и кнопок
const modal = document.getElementById("modal");
const circle =document.getElementById("circle");
const cancel= document.getElementById("cancel");

// Функция открытия модального окна
circle.addEventListener("click", () => {
    // modal.style.display = "flex"; // Если не используете CSS-класс show/hide
    modal.classList.add('show');
});

// Функция закрытия модального окна при клике на крестик
cancel.addEventListener("click", () => {
    // modal.style.display = "none";
    modal.classList.remove('show');
});

// Функция закрытия модального окна при клике вне его области
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        // modal.style.display = "none";
        modal.classList.remove('show');
    }
});

