let mylibrary = [];
let bookCards = [];
let noOfBooks = 0;

let addBtn = document.querySelector("#add-book");
let content = document.querySelector("#content");

addBookToLibrary(new book("asadfsdf" , "asdf " , 43 ,50));
addBookToLibrary(new book("asdf" , "asdf " , 43 ,345));
addBookToLibrary(new book("asdddf" , "asdf " , 43 ,345));
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
    this.index = 0;

    
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
    obj.index = noOfBooks;
    noOfBooks++;

    obj.container.classList.add("container");
    obj.right.classList.add("right");
    obj.left.classList.add("left");

    obj.addBtn.textContent = "+";
    obj.subBtn.textContent = "-";
    obj.addBtn.classList.add("primary-btn");
    obj.subBtn.classList.add("primary-btn");
    obj.addBtn.id = "add";
    obj.subBtn.id = "sub";
    obj.pages_read.id = "pages-read";

    obj.container.addEventListener("click" , function(e){
        
        update_pages(e , obj)
    });

}

function update_pages(e , obj){
    let index = 0;
    
    for(var i = 0 ; i < bookCards.length ; i++){
        if(bookCards[i].index == obj.index){
            break;
        }
        index++;
    }

    if(e.target.id =="add"){
        if(mylibrary[index].pages_read+1 > mylibrary[index].total_pages){
            alert("Err++");
        }else{
         mylibrary[index].pages_read++;
        }
    }else if(e.target.id =="sub"){
        if(mylibrary[index].pages_read == 0){
            alert("Err--");
            
        }else{
            mylibrary[index].pages_read--;
        }
    }


    obj.pages_read.textContent = `${mylibrary[index].pages_read} / ${mylibrary[index].total_pages}`;

    console.log(mylibrary[index].pages_read);
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
        genHtml(bookCards[i]);
        content.append(bookCards[i].container);

        
    }

    
}