const $ = require('jquery-browserify');

export default class Board {
    constructor() {
        this.tasks = [];
        this.bindEvents();
    }

    /**
     * @param task
     */
     addTask( task ) {
        this.tasks.push( task );
    }

    printTasks() {
        $.each( this.tasks, (i, task) => {
            console.log( task );
        });
    }

    bindEvents() {
        $('button').on('click', $.proxy(this.printTasks, this));
    }
}