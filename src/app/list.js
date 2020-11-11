import {newBook} from "./book.js";



// newbook is called when enter in add list

const addlistEvent=()=>{

  document.querySelector('.addList').addEventListener('click',(e)=>{
    remove_y();
  })

  enterKeyList();
}

const enterKeyList=()=>{
  document.querySelector('#listInput').addEventListener('keypress',(e)=>{
    
    if(e.charCode==13){

      newBook();

      let listName=e.target.value;
      formatList(listName);
      add_y();
      emptyListInput();
      return listName;
    }
  })
}

const formatList=(listName)=>{

  let olELement = document.querySelector('.formatList ol');
  let liElement = document.createElement('li');
  liElement.classList.add('list_li');
  
  liElement.textContent=listName;
  olELement.appendChild(liElement)
}

const remove_y=()=>{ //add display
  let listName=document.querySelector('.listName');
  listName.classList.remove('y');
}

const add_y=()=>{ //display none
  let listName=document.querySelector('.listName');
  listName.classList.add('y');
}

const emptyListInput=()=>{
  document.querySelector('#listInput').value="";
}

// const 


export{addlistEvent};


