let books=[];

function addBook(){

const title=document.getElementById("title").value;
const author=document.getElementById("author").value;

if(title=="" || author==""){
alert("Please enter book details");
return;
}

const book={
title:title,
author:author,
status:"Available"
};

books.push(book);

displayBooks();

}

function displayBooks(){

const list=document.getElementById("bookList");

list.innerHTML="";

books.forEach((book,index)=>{

const li=document.createElement("li");

li.innerHTML=
`${book.title} - ${book.author} - ${book.status}
<button onclick="issueBook(${index})">Issue</button>
<button onclick="returnBook(${index})">Return</button>`;

list.appendChild(li);

});

}

function issueBook(index){

books[index].status="Issued";

displayBooks();

}

function returnBook(index){

books[index].status="Available";

displayBooks();

}
