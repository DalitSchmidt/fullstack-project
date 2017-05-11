/**
 * In es6 there is the option to work with classes like in PHP, there for we will work with classes and call the class 'Task' which with it we are perform all the activities that deals the tasks.
 * We will use the order 'export', because that way we can declare so you will be able the connect the class and activate it.
 * We will use the order 'default', so when we need able to connect some parts of the class and activate only them when necessary.
 */
export default class Task {
    /**
     * @param title
     * @param date
     * @param description
     * We will use the 'constructor function' to deliver values in create new object, means the function able the user in a class deliver one value or group values that will make the state of the new object the we create from the class.
     * The 'constructor function' in this class get 3 parameters which they are:
     1.    The first parameter is 'title' include the task head line to perform.
     2.    The second parameter is 'date' include the task date to perform.
     3.    The third parameter is 'description' that include the task description to perform.
     */
    constructor( title, date, description ) {
        // The new object we create from the class turns to 'setTitle' function that get the parameter 'title' which include that task title to perform and activate it.
        this.setTitle( title );
        // The new object we create from the class turns to 'setDate' function that get the parameter 'date' which include that task date to perform and activate it.
        this.setDate( date );
        // The new object we create from the class turns to 'setDescription' function that get the parameter 'description' which include that task description to perform and activate it.
        this.setDescription( description );
    }

    /**
     * @param title
     * @throws Error
     * The function 'setTitle' allows to create the task title to perform with performing validation checks get the 'title' parameter which include the task title to perform.
     */
    setTitle ( title ) {
        // We will check if the length of the task title to perform is smaller the 5 chars, that way a new error message will be thrown ('Title must be at least 5 chars') the title says the task to perform must be at least 5 chars.
        if ( title.length < 5 ) {
            throw new Error ('Title must be at least 5 chars');
        }

        // The new object we create from the class turns to variable 'title' include the parameter 'title' which include that task title to perform.
        this.title = title;
    }

    /**
     * @returns {*}
     * The function 'getTitle' allows to get the title to perform task.
     */
    getTitle() {
        // The function 'getTitle' is return the new object we create from the class turns the variable 'title', that way the function return the task title to perform.
        return this.title;
    }

    /**
     * @param description
     * The function 'setDescription' allows to implement the task description to perform by performing validation check get the parameter 'description' which include the task description to perform.
     */
    setDescription ( description ) {
        // The new object we create from the class turns to variable 'description' include the parameter 'description' which include that task description to perform.
        this.description = description;
    }

    /**
     * @returns {*}
     * The function 'getDescription' allows to get the task description to perform.
     */
    getDescription() {
        // The function 'getDescription' return the new object we create from the class which turns to the variable 'description', that way the function return the task description to perform.
        return this.description;
    }

    /**
     * @param date
     * @throws Error
     * The function 'setDate' allows to create the date task to perform by making validation check get the parameter 'date' which include the task date to perform.
     */
    setDate( date ) {
        // We will check if the variable 'date' include the task date to perform he instance of the 'Date' function which is Built-in function of es6 that allows to get the date by defined structure which include a date not by defined structure (For example, a date in the past and not a date in the future), than will be thrown a new error message ('Invalid date, date must be instance of date') that says the date we put is invalid and the date must be instance of the function 'Date'.
        if ( date instanceof Date == false ) {
            throw new Error ('Invalid date, date must be instance of date');
        }

        // The new object we create from the class turns to variable 'date' include the 'date' parameter include the task date to perform.
        this.date = date;
    }

    /**
     * @returns {*}
     * The function 'getDate' allows to get a task date to perform.
     */
    getDate() {
        // The function 'getDate' return the new object we create from the class that turns to a variable 'date', that way the function return than task date to perform.
        return this.date;
    }

    /**
     * @returns {string}
     * We will use the function 'toString' which return a string and represent the object.
     */
    toString() {
        /**
         * @type {string}
         * The variable 'date' include the new object to create from the class, turns to variable 'date' that turns to the 'toString' function and activate it.
         * We will use the order 'let' which is an order in es6 that parallel to the order 'var', the main difference between the orders is the variable defines as 'let' he will exist only inside the relevant 'scope' and so we save the option to go to a wrong variable.
         */
        let date = this.date.toString();
        // The function 'toString' return the string 'Task: ${this.title} at ${date}; ${this.description}', that way include object that present to the task to perform with title, date and description to perform.
        return `Task: ${this.title} at ${date}; ${this.description}`;
    }
}