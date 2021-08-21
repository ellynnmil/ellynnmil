const display = document.querySelector(".main");
const openForm = document.getElementById("addBtn");
const closeForm = document.querySelector(".create-close");
const createWork = document.querySelector(".work-submit");
const createShop = document.querySelector('.shop-submit');
const createNote = document.querySelector('.note-submit');
const popupForm = document.querySelector(".create-new");
const toDoFolders = document.querySelectorAll('.name');
const popUp = document.querySelector(".popup");


// initial homescreen render
//domManipulator.renderAllToDos(todos, display);
//domManipulator.renderProjectNames(todos, display);


openForm.addEventListener('click', () => popUp.style.display = 'flex');
  //  popupForm.classList.toggle('create-new-open');

closeForm.addEventListener('click', () => popUp.style.display = 'none');
  //  popupForm.classList.toggle('create-new-open');

  var action = document.getElementById('new-work-link');

  action.addEventListener("click", function(){
     var etat = document.querySelector('.create-work').style.display;
     if(etat=="none"){
     document.querySelector('.create-work').style.display="block";
     document.querySelector('.create-shop').style.display="none";
     document.querySelector('.create-note').style.display="none";
     }
     else{
     document.querySelector('.create-work').style.display="none";
     }
  }, false);

  var action = document.getElementById('new-shop-link');

  action.addEventListener("click", function(){
     var etat = document.querySelector('.create-shop').style.display;
     if(etat=="none"){
     document.querySelector('.create-shop').style.display="block";
     document.querySelector('.create-note').style.display="none";
     document.querySelector('.create-work').style.display="none";
     }
     else{
     document.querySelector('.create-shop').style.display="none";
     }
  }, false);

  var action = document.getElementById('new-note-link');

  action.addEventListener("click", function(){
     var etat = document.querySelector('.create-note').style.display;
     if(etat=="none"){
     document.querySelector('.create-note').style.display="block";
     document.querySelector('.create-work').style.display="none";
     document.querySelector('.create-shop').style.display="none";
     }
     else{
     document.querySelector('.create-note').style.display="none";
     }
  }, false);


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
