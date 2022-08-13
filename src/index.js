import './styles/style.css';

const openBtn = document.querySelector('.open-btn');
const todoModal = document.getElementById('todo-modal');
const todoForm = document.getElementById('todo-form');
const cancelBtn = document.querySelector('.cancel');
openBtn.addEventListener('click', () => todoModal.showModal());
cancelBtn.addEventListener('click', () => todoModal.close());
todoForm.addEventListener('submit', () => alert('submitted'));
