import { saludar } from './js/componentes.js';
import './styles.css';

import { Todo, TodoList } from './classes';  //Reemplaza a las dos siguientes
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class.js';         
import { crearTodoHTML } from './js/componentes';

export const todoList = new TodoList(); 

// todoList.todos.forEach( todo => crearTodoHTML( todo ) );  es igual a la linea de abajo pues recibe el mismo parámetro
todoList.todos.forEach( crearTodoHTML );

console.log( 'todos', todoList.todos );












//      Creación de una tarea de ejemplo
/*
const tarea = new Todo('Aprender Javascript!');
todoList.nuevoTodo( tarea );
console.log( todoList );
crearTodoHTML( tarea );
tarea.completado = false;
*/


//      Local Storage
/*
localStorage.setItem('mi-key', 'ABC123');
setTimeout( ()=>{

    localStorage.removeItem('mi-key');
}, 1500);
*/