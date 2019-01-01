import Task from './Task';
import Board from './Board';

/**
 * @type {Board}
 */
let board = new Board();

board.addTask( new Task('Doctor', new Date(), 'After braking the tooth have to check it') );