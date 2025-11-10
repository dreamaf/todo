
document.addEventListener('DOMContentLoaded', (event) => {
   modalcontent.classList.add('light');
    inputtt.classList.add('light');
})



const button = document.getElementById("button2");
const modalcontent = document.getElementById("modalcontent");
const buttons = document.getElementById("buttons");




button.addEventListener("click", function() { 
  if (document.body.style.backgroundColor === "black" || document.body.style.backgroundColor === "rgb(0, 0, 0)") {
    
    document.body.style.backgroundColor = "white";
    document.body.style.color = 'black';
          modalcontent.classList.remove('dark');
         modalcontent.classList.add('light');

     
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = 'white';
          modalcontent.classList.add('dark');
     modalcontent.classList.remove('light');

;
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


cancel.addEventListener("click", () => {
    // modal.style.display = "none"
    modal.classList.remove('show');
    
});

// Функция закрытия модального окна при клике вне его области
// window.addEventListener("click", (event) => {
//     if (event.target == modal) {
//         // modal.style.display = "none";
//         modal.classList.remove('show');
//     }
// });




const notesContainer = document.querySelector(".notes");
const apply = document.getElementById("apply");
const inputtt = document.getElementById("inputtt");


let noteCount = 1;

// 2. Добавляем слушатель события на кнопку
apply.addEventListener("click", function() {
    // Увеличиваем счетчик заметок
    // noteCount++;
    const noteText = inputtt.value;


  if (noteText.trim() === "") {
        alert("Пожалуйста, введите текст заметки.");
        return;
    }


    // 3. Создаем HTML-строку, которую нужно вставить
    const newNoteHTML = `
        <hr style="border-color: rgb(199, 199, 255); width: 700px" />
        <div class="note">
        <div class="cub"> <input type="checkbox" id="checkbox" name="checkbox1"></div>
          <div class="text">${noteText}</div>
        </div>
    `;

    // 4. Вставляем HTML-строку в конец контейнера .notes
    // 'beforeend' означает "вставить внутрь элемента, но перед его закрывающим тегом (в конец содержимого)"
    notesContainer.insertAdjacentHTML('beforeend', newNoteHTML);
});


// NOTE #${noteCount}




        const inputt = document.getElementById('inputt');
          const nf = document.getElementById('nf');


        inputt.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          
            this.value = '';
            nf.classList.remove('hidden');
        }
    });

