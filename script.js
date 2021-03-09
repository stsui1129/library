let myLibrary = []; //create an empty array

class Book {
    constructor (title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.info = function() {
            return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
        }
    }
}

let book1 = new Book("To Kill A Mockingbird", "Harper Lee", "296", "Not Read");
let book2 = new Book("The Hobbit", "J. R. R. Tolkien", "310", "Read");
myLibrary.push(book1);
myLibrary.push(book2);

console.log(book1);
console.log(book1.title);
console.log(book1.read);
console.log(myLibrary[0].title);
console.log(book1.info());

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    // console.log(myLibrary);
    renderBook(book);
}

function renderLibrary() { // renders all the books in myLibrary array
    for (let i=0; i<myLibrary.length; i++){
        renderBook(myLibrary[i]);
    }
}

function renderBook(book) { // renders individual book cards
    const library = document.querySelector(".book-space");
    const bookDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const pagesDiv = document.createElement("div");

    const readBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    bookDiv.classList.add("book-div");
    bookDiv.setAttribute("id", myLibrary.indexOf(book)); //set id to book index in array
    library.appendChild(bookDiv);

    titleDiv.classList.add("title-div");
    titleDiv.textContent = book.title;
    bookDiv.appendChild(titleDiv);

    authorDiv.classList.add("author-div");
    authorDiv.textContent = book.author;
    bookDiv.appendChild(authorDiv);

    pagesDiv.classList.add("pages-div");
    pagesDiv.textContent = book.pages + " pages";
    bookDiv.appendChild(pagesDiv);

    readBtn.classList.add("read-btn");
    bookDiv.appendChild(readBtn);

    if (book.read === "Not Read") { //this is only for mockingbird/hobbit
        readBtn.textContent = "Not Read";
    } else {
        readBtn.textContent = "Read";
    }

    readBtn.addEventListener('click', toggleStatus);

    function toggleStatus() {
        book.read = !book.read; //turns truthy values falsy and vice-versa
        if (book.read === false) {
            readBtn.textContent = "Not Read";
        } else {
            readBtn.textContent = "Read";
        }
    }

    removeBtn.classList.add("remove-btn");
    removeBtn.textContent = "Remove";
    bookDiv.appendChild(removeBtn);

    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        library.removeChild(bookDiv);
        // console.log(myLibrary);
    });
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

const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", (event) => {
    addBookToLibrary();
    toggleModal();
    event.preventDefault(); //prevents the form from reloading the script
    formReset();
});

function formReset() {
    const form = document.getElementById('form');
    form.reset(); //clears the values in the form since we're preventing that with preventDefault()
}

function toggleModal() {
    modal.classList.toggle("show-modal"); //toggles between .modal class and .show-modal class
}

renderLibrary();