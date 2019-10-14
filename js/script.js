const today = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let day = days[today.getDay()];
if (today.getDay() === 0) day = `<u>${day}</u>`;
let date = `${today.getDate()} ${months[today.getMonth()]}`;
if (today.getDate() === 1) date = `<u>${date}</u>`;
const title = `${day}, ${date}`;
document.getElementById('title').innerHTML = title;

const keep = 'https://keep.google.com';
const mail = 'https://mail.google.com';
const calendar = 'https://calendar.google.com';
const nextActions = 'https://docs.google.com/document/d/14-W8v3uyUjN72ZUo7QTcQ9nkDG9oyQFedGKTxLfl7L4/edit';
const waitingFor = 'https://docs.google.com/document/d/1jOnInJ2Ca0izeNc2_qW-cZzW_9og5oYe8EGbgyz6tKA/edit';
const projects = 'https://docs.google.com/document/d/1iGmdvWvtVJiofrLGQObrM6QhK6OzFSFCfuP8tuUFrCk/edit';
const recurring = 'https://docs.google.com/document/d/1wafeFixdDoUePFrv-OmFeo7ChgAtHZRhUiFCqL0jekU/edit';
const someday = 'https://docs.google.com/document/d/1dFZVGZ34LEU-84KS8-_HRA9BAST9sqUHlos9yYQKZLI/edit';
document.getElementById('open-daily-lists').addEventListener('click', () => {
  [keep, mail, calendar, nextActions, waitingFor, projects].forEach(link => window.open(link, '_blank'));
});
document.getElementById('open-daily-lists-and-recurring').addEventListener('click', function() {
  [keep, mail, calendar, nextActions, waitingFor, projects, recurring].forEach(link => window.open(link, '_blank'));
});
document.getElementById('open-all-lists').addEventListener('click', function() {
  [keep, mail, calendar, nextActions, waitingFor, projects, someday].forEach(link => window.open(link, '_blank'));
});
