// With the order 'import', we connect the class 'Task' (which with the order we perform all the orders that deals with the tasks) that in document 'Task.js'.
import Task from './Task';
// With the order 'import', we connect the class 'Board' (which with the order we operate all the orders that deals with the tasks board) that in document 'Board.js'.
import Board from './Board';

/**
 * @type {Board}
 * The variable 'board' include the new object we create from the class 'Board', so that way he create new instance of the class 'Board'.
 * We will use the order 'let' which is an order in es6 that parallel to the order 'var', the main difference between the orders is the variable defines as 'let' he will exist only inside the relevant 'scope' and so we save the option to go to a wrong variable.
 */
let board = new Board();

/**
 * The variable 'board' (which include the new object from the class 'Board') turns the function 'addTask' (which allows create that task to tasks board), so that way it include the new object we create from the class 'Task' and get 3 parameters found in the 'constructor function' in the 'Task' class are:
 1.	The first parameter is 'title' include the task head line to perform.
 2.	The second parameter is 'date' include the task date to perform, actually create new object of the 'Date' function which is Built-in function of es6 that as allow us get the date by defined structure.
 3.	The third parameter is 'description' that include the task description to perform.
 * That way we create new tasks in the tasks board which will present in the console.
 */
board.addTask( new Task('Doctor', new Date(), 'After braking the tooth have to check it') );