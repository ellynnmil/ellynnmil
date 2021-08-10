const display = document.querySelector(".main");
const openForm = document.getElementById("addBtn");
const closeForm = document.querySelector(".create-close");
const createWork = document.querySelector(".work-submit");
const createShop = document.querySelector('.shop-submit');
const createNote = document.querySelector('.note-submit');
const popupForm = document.querySelector(".create-new");
const toDoFolders = document.querySelectorAll('.name');
const popUp = document.querySelector(".popup");

// nav links to switch between creating a new todo, form and note from within the creation form
const newShopLink = document.querySelector("#new-shop-link");
const newWorkLink = document.querySelector("#new-work-link");
const newNoteLink = document.querySelector("#new-note-link");
// menus to display when the corresponding creation nav links are clicked
const newShopMenu = document.querySelector(".create-shop");
const newWorktMenu = document.querySelector(".create-work");
const newNoteMenu = document.querySelector(".create-note");


// initial homescreen render
//domManipulator.renderAllToDos(todos, display);
//domManipulator.renderProjectNames(todos, display);


openForm.addEventListener('click', () => popUp.style.display = 'flex');
  //  popupForm.classList.toggle('create-new-open');

closeForm.addEventListener('click', () => popUp.style.display = 'none');
  //  popupForm.classList.toggle('create-new-open');

// control which form menu is open
newShopLink.addEventListener('click', () =>{
    // turn off other menus
    newWorkMenu.style.display = "none";
    newNoteMenu.style.display = "none";
    // DISPLAY SELECTED MENU
    newShopMenu.style.display = "flex";
})
newWorkLink.addEventListener('click', () =>{
    // turn off other menus
    newShopMenu.style.display = "none";
    newNoteMenu.style.display = "none";
    // DISPLAY SELECTED MENU
    newWorkMenu.style.display = "flex";
})
newNoteLink.addEventListener('click', () =>{
    // turn off other menus
    newShopMenu.style.display = "none";
    newWorkMenu.style.display = "none";
    // DISPLAY SELECTED MENU
    newNoteMenu.style.display = "flex";
})


// add new shop
popupForm.addEventListener('submit', e => {
  shopManager.addNewShop(e, todos, overlayNew, popupForm, display);

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
    sleep(300).then(() => {
        // resets form active link back to new todo
        domManipulator.resetActiveFormLink();
    })
});

// add new work
createWork.addEventListener('click', e => {
  workManager.addNewWork(e, todos, overlayNew, popupForm, display);

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
    sleep(300).then(() => {
        // resets form active link back to new todo
        domManipulator.resetActiveFormLink();
    })
})

// add new note
createNote.addEventListener('click', e => {
    notesManager.addNewNote(e, notes, overlayNew, popupForm, display);

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
    sleep(300).then(() => {
        // resets form active link back to new todo
        domManipulator.resetActiveFormLink();
    })
})

// navigate to notes menu
document.querySelector('#note-nav').addEventListener('click', () => notesManager.arrangeNotes(notes));
document.querySelector('#note-nav').addEventListener('click', (e) => domManipulator.updateActiveNavMain(e));

const createOptions = document.querySelectorAll('.create-options');
createOptions.forEach(option => {
    option.addEventListener('click', e => {
        createOptions.forEach(option => {
            option.classList.remove('create-options-active');
        });
        e.target.classList.add('create-options-active');
    });
})
console.log(todos)
