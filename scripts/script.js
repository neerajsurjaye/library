let mylibrary = [];
let bookCards = [];
let noOfBooks = 0;

let addBtn = document.querySelector("#add-book");
let content = document.querySelector("#content");

addBookToLibrary(new book("asdf" , "asdf " , 43 ,345));
addBookToLibrary(new book("asdf" , "asdf " , 43 ,345));
addBookToLibrary(new book("asdf" , "asdf " , 43 ,345));
generateCard();

let tempBook = new book("asdf" , "asdf " , 43 ,345);


function book(name , description , pages_read , total_pages){
    this.name = name;
    this.description = description;
    this.pages_read = pages_read;
    this.total_pages = total_pages;
}

function card(iBook){
    this.container = document.createElement("div");
    this.left = document.createElement("div");
    this.right = document.createElement("div");
    this.name = document.createElement("h1");
    this.description = document.createElement("p");
    this.pages_read = document.createElement("p");
    this.addBtn = document.createElement("div");
    this.subBtn = document.createElement("div");

    this.name.textContent = iBook.name;
    this.description.textContent = iBook.description;
    this.pages_read.textContent = `${iBook.pages_read} / ${iBook.total_pages}`;
}

function genHtml(obj){
    obj.left.append(obj.name);
    obj.left.append(obj.description);
    
    obj.container.append(obj.left);
    obj.container.append(obj.right);
    obj.right.append(obj.addBtn);
    obj.right.append(obj.pages_read);
    obj.right.append(obj.subBtn);

    obj.container.classList.add("container");
    obj.right.classList.add("right");
    obj.left.classList.add("left");

    obj.addBtn.textContent = "+";
    obj.subBtn.textContent = "-";
    obj.addBtn.classList.add("primary-btn");
    obj.subBtn.classList.add("primary-btn");


}


function addBookToLibrary(iBook){
    mylibrary.push(iBook);
}


// let temp = new card(tempBook);
// temp.genHtml();
// content.append(temp.container);

function generateCard(){
    for(var i = 0 ; i<mylibrary.length ; i++){

        bookCards[i] = new card(mylibrary[i]);
        console.log(bookCards[i]);
        genHtml(bookCards[i]);
        content.append(bookCards[i].container);

        
    }

    
}