const addBookEvent=()=>{
  document.querySelector('.addBook').addEventListener('click',(e)=>{

    remove_x();

  })

  enterKeyBook();
}


const enterKeyBook=()=>{
  document.querySelector('#bookInput').addEventListener('keypress',(e)=>{
    
    if(e.charCode==13){
      let bookName=e.target.value;
      formatBook(bookName);
      add_x();
      emptyBookInput();
      return bookName;
    }
  })
}

const formatBook=(bookName)=>{

  let olELement = document.querySelector('.formatBook ol');
  let liElement = document.createElement('li');
  liElement.classList.add('book_li');
  
  liElement.textContent=bookName;
  olELement.appendChild(liElement);
  // console.log(liElement);
}

const remove_x=()=>{ //add display
  let bookName=document.querySelector('.bookName');
  bookName.classList.remove('x');
}

const add_x=()=>{ //display none
  let bookName=document.querySelector('.bookName');
  bookName.classList.add('x');
}

const emptyBookInput=()=>{
  document.querySelector('#bookInput').value="";
}

// const selectBook=()=>{
//   document.querySelectorAll('.book_li').forEach((value)=>{
//     value.addEventListener('click',(e)=>{
      
//       e.target.style.border='1px solid red';
      
//       return e.target.textContent;
//     })
//   })
// }

const newBook=()=>{
  let book = document.querySelector('.formatBook ol').lastElementChild.textContent;

  return book;
}

export{addBookEvent, newBook};


