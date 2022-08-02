import { draw } from './whiteboard';
import { io } from 'socket.io-client';

let socket = io(window.location.origin);

socket.on('connect', function () {
  console.log('Connected!');
});

on('load', function (strokes) {

  strokes.forEach(function (stroke) {
    var start = stroke.start;
    var end = stroke.end;
    var color = stroke.color;
    draw(start, end, color, false);
  });

});

on('draw', function (start, end, color) {
  draw(start, end, color, false);
});

on('draw', function (start, end, color) {
  emit('draw', start, end, color);
});

