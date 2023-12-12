const EventEmitter = require('events');
const myEmitter = new EventEmitter();

//on is used to add a callback function that's going to be executed when the event is triggered
myEmitter.on('birthday', () => {
    console.log("happy birthday");
})

myEmitter.on('birthday', (name) => {
    console.log(name);
})

//emit is used to trigger an event
myEmitter.emit('birthday', 'zubair');