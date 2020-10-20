let myLibrary = [];

let book1 = new Book("To Kill A Mockingbird", "Harper Lee", "296", read);
let book2 = new Book("The Hobbit", "J. R. R. Tolkien", "310", read);
myLibrary.push(book1);
myLibrary.push(book2);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
    }
}

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const form = document.getElementById('form');
    
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);

    console.log(myLibrary);

    renderBook(book);
}

function renderLibrary() {
    for (let i=0; i<myLibrary.length; i++){
        renderBook(myLibrary[i]);
    }
}

function renderBook(book) {
    const library = document.querySelector(".bookSpace");
    const bookDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const pagesDiv = document.createElement("div");

    const readBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    bookDiv.classList.add("book-div");
    // bookDiv.setAttribute("id", myLibrary.indexOf(book));
    library.appendChild(bookDiv);

    titleDiv.classList.add("title-div");
    titleDiv.textContent = book.title;
    bookDiv.appendChild(titleDiv);

    authorDiv.classList.add("author-div");
    authorDiv.textContent = book.author;
    bookDiv.appendChild(authorDiv);

    pagesDiv.classList.add("pages-div");
    pagesDiv.textContent = book.pages;
    bookDiv.appendChild(pagesDiv);

    readBtn.classList.add("read-btn");
    readBtn.textContent = "Read?";
    bookDiv.appendChild(readBtn);

    removeBtn.classList.add("remove-btn");
    removeBtn.textContent = "Remove";
    bookDiv.appendChild(removeBtn);
}

// //https://www.w3schools.com/howto/howto_css_modals.asp
// //https://sabe.io/tutorials/how-to-create-modal-popup-box

const modal = document.querySelector(".modal");

const trigger = document.querySelector(".trigger");
trigger.addEventListener("click", toggleModal);

const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", toggleModal);

const cancelButton = document.querySelector("#cancel-button");
cancelButton.addEventListener("click", toggleModal);

// const submitButton = document.querySelector("#submit-button");
// submitButton.addEventListener("click", addBookToLibrary); //old code

const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", (event) => {
    addBookToLibrary();
    toggleModal();
    event.preventDefault();
});

function toggleModal() {
    modal.classList.toggle("show-modal"); //toggles between .modal class and .show-modal class
}

renderLibrary();
