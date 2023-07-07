
import './App.css';

import Header from './components/Header';
// import {TodoItem} from './components/TodoItem';
import {Todos} from './components/Todos';
import {Footer} from './components/Footer';
import { useState, useEffect } from 'react';
import { AddTodos } from './components/AddTodos';
// import About from './components/About';



function App() {
  let  initTodo
  if(localStorage.getItem("todos")===null){
   initTodo=[]
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"))
  }
  
  
  
 const onDelete=(todo)=>{
 console.log('delt',todo)
   setTodos(todos.filter((e)=>{
         return e!==todo
   }))
   localStorage.setItem("todos",JSON.stringify(todos))
  }
  const addTodos=(title,desc)=>{
console.log('I m adding todo',title,desc)
let sno;
if(todos.length === 0){
  sno=0;
}
else{
   sno = todos[todos.length-1].sno+1;

}
const myTodo={
  sno: sno,
  title:title,
  desc:desc
}
setTodos([...todos,myTodo])
console.log(myTodo)
   

  }
  const [todos,setTodos] = useState(initTodo)
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  
  },[todos])
  return (
    <>
  
   <Header title='TodoList'  search={false}/>
 
          
               <AddTodos addTodos={addTodos}/>
               <Todos todos={todos} onDelete={onDelete}/>
           
      
           
  
     <Footer/>
   
    </>
     
  );
}


export default App;
