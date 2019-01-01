export default class Task {
    /**
     * @param title
     * @param date
     * @param description
     */
    constructor( title, date, description ) {
        this.setTitle( title );
        this.setDate( date );
        this.setDescription( description );
    }

    /**
     * @param title
     * @throws Error
     */
    setTitle ( title ) {
        if ( title.length < 5 ) {
            throw new Error ('Title must be at least 5 chars');
        }

        this.title = title;
    }

    /**
     * @returns {*}
     */
    getTitle() {
        return this.title;
    }

    /**
     * @param description
     */
    setDescription ( description ) {
        this.description = description;
    }

    /**
     * @returns {*}
     */
    getDescription() {
        return this.description;
    }

    /**
     * @param date
     * @throws Error
     */
    setDate( date ) {
        if ( date instanceof Date == false ) {
            throw new Error ('Invalid date, date must be instance of date');
        }

        this.date = date;
    }

    /**
     * @returns {*}
     */
    getDate() {
        return this.date;
    }

    /**
     * @returns {string}
     */
    toString() {
        /**
         * @type {string}
         */
        let date = this.date.toString();
        
		return `Task: ${this.title} at ${date}; ${this.description}`;
    }
}