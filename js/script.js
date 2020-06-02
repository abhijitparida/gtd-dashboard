const today = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const day = days[today.getDay()];
const date = `${today.getDate()} ${months[today.getMonth()]}`;
document.getElementById('title').innerHTML = `${day}, ${date}`;

const urls = {
  keep: 'https://keep.google.com',
  mail: 'https://mail.google.com',
  calendar: 'https://calendar.google.com',
  nextActions: 'https://keep.google.com/#LIST/1RAfNNBFWYn74BtBl_ze2LFV8L8E9Vq5JManSdY4g3-HJYfCXPqMLs2yrt_Hy-g',
  blockers: 'https://docs.google.com/document/d/1jOnInJ2Ca0izeNc2_qW-cZzW_9og5oYe8EGbgyz6tKA/edit',
  projects: 'https://docs.google.com/document/d/1iGmdvWvtVJiofrLGQObrM6QhK6OzFSFCfuP8tuUFrCk/edit',
  someday: 'https://docs.google.com/document/d/1dFZVGZ34LEU-84KS8-_HRA9BAST9sqUHlos9yYQKZLI/edit'
};
document.querySelectorAll('button').forEach(button => {
  const links = button.getAttribute('data-links').split(',');
  const openLinks = () => links.map(link => urls[link]).forEach(link => window.open(link, '_blank'));
  button.addEventListener('click', openLinks);
});
