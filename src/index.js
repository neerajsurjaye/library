// import firebase from "firebase/app"
import fire from "./fire"

let mylibrary = [];
let bookCards = [];
let noOfBooks = 0;

let addBtn = document.querySelector("#add-book");
let content = document.querySelector("#content");
let form_close = document.querySelector("#close-button");
let pop_form = document.querySelector("#pop-form");
let add_book = document.querySelector("#add-book");
let submit_button = document.querySelector("#form-submit");
let addbookfloat = document.querySelector("#add-book-float");


getBook();
fire.init();
// console.log(fire);

if (mylibrary.length != 0) {
    console.log("MU LIBRARAY");
    generateCard();
}
let tempBook = new book("asdf", "asdf ", 43, 345);


function book(name, description, pages_read, total_pages) {
    this.name = name;
    this.description = description;
    this.pages_read = pages_read;
    this.total_pages = total_pages;
}

function card(iBook) {
    this.container = document.createElement("div");
    this.left = document.createElement("div");
    this.right = document.createElement("div");
    this.name = document.createElement("h1");
    this.description = document.createElement("p");
    this.pages_read = document.createElement("p");
    this.addBtn = document.createElement("div");
    this.subBtn = document.createElement("div");
    this.cross = document.createElement("div");
    this.index = 0;


    this.name.textContent = iBook.name;
    this.description.textContent = iBook.description;
    this.pages_read.textContent = `${iBook.pages_read} / ${iBook.total_pages}`;
}

function genHtml(obj, index) {
    obj.left.append(obj.name);
    obj.left.append(obj.description);

    obj.container.append(obj.left);
    obj.container.append(obj.right);
    obj.right.append(obj.addBtn);
    obj.right.append(obj.pages_read);
    obj.right.append(obj.subBtn);
    obj.index = index;
    obj.right.append(obj.cross);
    noOfBooks++;

    obj.container.classList.add("container");
    obj.right.classList.add("right");
    obj.left.classList.add("left");
    obj.cross.id = "close-card";
    obj.cross.textContent = "x";

    obj.addBtn.textContent = "+";
    obj.subBtn.textContent = "-";
    obj.addBtn.classList.add("primary-btn-con");
    obj.subBtn.classList.add("primary-btn-con");
    obj.addBtn.id = "add";
    obj.subBtn.id = "sub";
    obj.pages_read.id = "pages-read";

    obj.container.addEventListener("click", function (e) {
        if (e.target.id == "close-card") {
            removeBook(obj);
            return;
        }

        if (e.target.id == "add" || e.target.id == "sub") {

            update_pages(e, obj)
        }
    });

}

function update_pages(e, obj) {
    let index = 0;
    console.log("ran", bookCards);
    for (var i = 0; i < bookCards.length; i++) {
        console.log(i);
        if (bookCards[i] != null) {
            if (bookCards[i].index == obj.index) {
                break;
            }
        }
        index++;
    }

    if (e.target.id == "add") {
        if (mylibrary[index].pages_read + 1 > mylibrary[index].total_pages) {
            alert("Err++");
        } else {

            mylibrary[index].pages_read++;
        }
    } else if (e.target.id == "sub") {
        if (mylibrary[index].pages_read == 0) {
            alert("Err--");

        } else {
            mylibrary[index].pages_read--;
        }
    }


    obj.pages_read.textContent = `${mylibrary[index].pages_read} / ${mylibrary[index].total_pages}`;



    setBook();

}


function addBookToLibrary(iBook) {
    mylibrary.push(iBook);
    setBook();
}


// let temp = new card(tempBook);
// temp.genHtml();
// content.append(temp.container);

function generateCard() {
    bookCards = [];
    content.innerHTML = "";
    for (var i = 0; i < mylibrary.length; i++) {
        if (mylibrary[i] != null) {

            bookCards[i] = new card(mylibrary[i]);
            genHtml(bookCards[i], i);
            content.append(bookCards[i].container);
        } else {
            bookCards[i] = null;
        }

    }


}



/*form*/
form_close.addEventListener("click", renderForm);
add_book.addEventListener("click", renderForm);
addbookfloat.addEventListener("click", renderForm);

function renderForm(e) {
    if (e.target.id == "close-button") {
        pop_form.style.display = "none";
    }
    if (e.target.id == "add-book" || e.target.id == "add-book-float") {
        pop_form.style.display = "flex";
    }
}


/*submit button*/
submit_button.addEventListener("click", submit_book);

let iBookName = document.querySelector("#book-name");
let iDescription = document.querySelector("#description");
let iNoOfPage = document.querySelector("#no-of-pages");
let iPagesRead = document.querySelector("#inp-pages-read");


function submit_book(e) {

    let new_book = new book(iBookName.value, iDescription.value, parseInt(iPagesRead.value), parseInt(iNoOfPage.value));
    addBookToLibrary(new_book);
    generateCard();
    pop_form.style.display = "none";
}


function getBook() {
    if (localStorage.getItem("book-library") != null) {
        mylibrary = JSON.parse(localStorage.getItem("book-library"));

    }
}

function setBook() {
    localStorage.setItem("book-library", JSON.stringify(mylibrary));
    console.log(mylibrary);
}

function removeBook(obj) {
    console.log(mylibrary);
    console.log(obj.index);
    mylibrary[obj.index] = null;
    // delete obj;
    generateCard();
    setBook();
}



//localStorage.removeItem("book-library");s