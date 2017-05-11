// So will be able to work with jQuery in es6 we will charge it with the order 'const $ = require('jquery-browserify');'.
const $ = require('jquery-browserify');

/**
 * In es6 there is the option to work with classes like in PHP, there for we will work with classes and call the class 'Board' which we will it we are order all the activities that are in tasks board.
 * We will use the order 'export', because that way we can declare so you will be able the connect the class and activate it.
 * We will use the order 'default', so when we need able to connect some parts of the class and activate only them when necessary.
 */
export default class Board {
    // We will use the 'constructor function' to deliver values in create new object, means the function able the user in a class deliver one value or group values that will make the state of the new object the we create from the class.
    constructor() {
        // The new object we are the creating from the class tends to 'tasks' and restart an empty array that will contain all the tasks.
        this.tasks = [];
        // The new object we are creating from the class tense to the function 'bindEvents' that include all the events in class, so actually it will create the function.
        this.bindEvents();
    }

    /**
     * @param task
     * The function 'addTask' allow to had the task to the tasks board and receive the 'task' parameter that contain the new task to the board.
     */
     addTask( task ) {
        // The new object we are created from the class tense to array of 'tasks' and add new task to array with the order 'push'.
        this.tasks.push( task );
    }

    // The function 'printTasks' allow to print (to present) existing tasks at the tasks board.
    printTasks() {
        /**
         We will go through the array of tasks with each loop that allows as go through the array take element form it and get it 3 parameters:
         1. The first parameter she is getting is the new object that we will be create from the class and contain each array of tasks (if tasks excites).
         2. The second parameter she is getting is 'i'.
         3. The third parameter she is getting is 'task' that contain the new task we add for the tasks board, and actually we want it to present at the tasks board.
         */
        $.each( this.tasks, (i, task) => {
            // With the order 'console.log' we will present the task we add to the tasks board in the console window.
            console.log( task );
        });
    }

    // The function 'bindEvents' include all the events that can happened in the class.
    bindEvents() {
        // With the order '$('button').on('click', $.proxy(this.printTasks, this));', when we press the button in the page we allow to print (to present) all the existing task in the tasks board array.
        $('button').on('click', $.proxy(this.printTasks, this));
    }
}