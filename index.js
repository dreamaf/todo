
document.addEventListener('DOMContentLoaded', (event) => {
  modalcontent.classList.add('light');
  inputtt.classList.add('light');
  button2.classList.add('moon');
})



const button = document.getElementById("button2");
const modalcontent = document.getElementById("modalcontent");
const buttons = document.getElementById("buttons");



//тема
button.addEventListener("click", function () {
  if (document.body.style.backgroundColor === "black" || document.body.style.backgroundColor === "rgb(0, 0, 0)") {

    document.body.style.backgroundColor = "white";
    document.body.style.color = 'black';
    modalcontent.classList.remove('dark');
    modalcontent.classList.add('light');
    button2.classList.remove('sun');
    button2.classList.add('moon');

  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = 'white';
    modalcontent.classList.add('dark');
    modalcontent.classList.remove('light');
    button2.classList.add('sun');
    button2.classList.remove('moon');
    ;
  }
});


//модальное окно
const modal = document.getElementById("modal");

const circle = document.getElementById("circle");
const cancel = document.getElementById("cancel");

// Функция открытия модального окна
circle.addEventListener("click", () => {
  // modal.style.display = "flex"; // Если не используете CSS-класс show/hide
  modal.classList.add('show');
});


cancel.addEventListener("click", cancel_F);

function cancel_F() {
  modal.classList.remove('show');
}

// Функция закрытия модального окна при клике вне его области
// window.addEventListener("click", (event) => {
//     if (event.target == modal) {
//         // modal.style.display = "none";
//         modal.classList.remove('show');
//     }
// });



//сощдание заметки
const notesContainer = document.querySelector(".notes");
const apply = document.getElementById("apply");
const inputtt = document.getElementById("inputtt");


let noteCount = 1;


apply.addEventListener("click", function () {
  // Увеличиваем счетчик заметок
  // noteCount++;
  const noteText = inputtt.value;

     

  if (noteText.trim() === "") {
    alert("Пожалуйста, введите текст заметки.");
    return;
  }


  const newNoteHTML = `
    <div class="forhr">
        <div class="note">
       <input type="checkbox" id="checkbox" name="checkbox1">
          <label for="checkbox"><span>${noteText}</span></label>
        </div>
            <hr style="border-color: rgb(199, 199, 255); width: 700px" />
        </div>
    `;


  // 'beforeend' означает "вставить внутрь элемента, но перед его закрывающим тегом (в конец содержимого)"
  notesContainer.insertAdjacentHTML('beforeend', newNoteHTML);

  cancel_F()
});


// NOTE #${noteCount}











const inputt = document.getElementById('inputt');
const nf = document.getElementById('nf');
const main = document.getElementById('main');
const listNotes = document.getElementById('.notes .note');

// inputt.addEventListener('input', () => {
//   let listNotes = document.querySelectorAll(" .notes > .forhr > .note > label > span");
//   for (let i = 0; i < listNotes.length; i++) {
//     main.classList.add('hidden');
//     nf.classList.remove('hidden');
//     listNotes[i].parentElement.parentElement.parentElement.style.display = "none";
//     if (listNotes[i].innerText.includes(inputt.value)) {
//       listNotes[i].parentElement.parentElement.parentElement.style.display = "block";
//       main.classList.remove('hidden');
//       nf.classList.add('hidden');
//     }

//   }
// })

//поиск
inputt.addEventListener('input', () => {
    let listNotes = document.querySelectorAll(" .notes > .forhr > .note > label > span");
    let foundResults = false; 

    //скрываем все заметки
    listNotes.forEach(spanElement => {
        //перед началом нового поиска скрыть все существующие заметки и показать только те что подходят под новый поисковый запрос
        const noteWrapper = spanElement.closest('.forhr');
        if (noteWrapper) {
            noteWrapper.style.display = "none";
        }
    });

    // Проходим по всем заметкам и показываем подходящие
    for (let i = 0; i < listNotes.length; i++) {
        const noteText = listNotes[i].innerText;
        const noteWrapper = listNotes[i].closest('.forhr');

        // Используем includes() для поиска подстроки
        if (noteText.includes(inputt.value)) {
            if (noteWrapper) {
                noteWrapper.style.display = "";
                foundResults = true; // тру потому что хотя бы одна заметка найдена
            }
        }
    }

    // После цикла определяем, что показать: main или nf
    if (foundResults) {
        main.classList.remove('hidden');
        nf.classList.add('hidden');
    } else {
        main.classList.add('hidden');
        nf.classList.remove('hidden');
    }
});


























// const query =  inputt.value.toLowerCase().trim():
// let matches = 0;

// notesContainer.forEach(note => {
// const name = note.textContent.toLowerCase();
// if (name.includes(query)) {
//   note.style.display = 'block';
//   matches++;
// } else {
//    note.style.display = 'none';
// }
// })

//      })



// const filterSelect = document.getElement('filterStatus');
// const allNotes = document.getElement('.notes');

// function applyDilter() {
//   const selectrdValue = filterSelect.value;

//   allNotes.forEach(note => {
//     const noteStatus = note.getAttribute('data-status');
    
//     if (selectedValue === 'all') {
//     note.style.display = '';
//   } else if (selectedValue === noteStatus) {
//     note.style.display = ''
//   } else {
//         note.style.display = 'none'
//   }
//   })
// }
// const allselected = document.getElement('allselected');

// for(let i=0; allselected.length; i++) {
// allselected[i].addEventListener("click", () => {

// })
// }



//выпадающее окно
const selectAll = document.getElementById('selectall');
const notes = document.querySelector('.notes');

function filterNotes() {
    const selectedValue = selectAll.value;
    //получаем все блоки заметок
    const allNotes = notes.querySelectorAll('.forhr');

    allNotes.forEach(noteWrapper => {
        //находим чекбокс внутри текущего блока заметки
        const checkbox = noteWrapper.querySelector('input[type="checkbox"]');

        let shouldShow = false;

        if (selectedValue === 'ALL') {
            shouldShow = true;
        } else if (selectedValue === 'CHECKED') {
       
            shouldShow = checkbox && checkbox.checked;
        } else if (selectedValue === 'NOT CHECKED') {
          
            shouldShow = checkbox && !checkbox.checked;
        }

    
        if (shouldShow) {
            noteWrapper.style.display = ''; // показываем элемент
        } else {
            noteWrapper.style.display = 'none'; // скрываем элемент
        }
    });
}

selectAll.addEventListener('change', filterNotes);


