// let myLibrary = [];

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function() {
//         return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
//     }
// }

// function addBookToLibrary() {
//     let book = new Book();
//     myLibrary.push(book);
//     //renderBook();
// }

// // function renderBook() {

// // }


// //https://www.w3schools.com/howto/howto_css_modals.asp
// //https://sabe.io/tutorials/how-to-create-modal-popup-box
const modal = document.querySelector(".modal");

const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", toggleModal);

const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", toggleModal);

const cancelButton = document.querySelector("#cancel-button");
cancelButton.addEventListener("click", toggleModal);

function toggleModal() {
    modal.classList.toggle("show-modal");
}






