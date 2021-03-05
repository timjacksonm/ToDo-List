import { display } from './display';
import _ from 'flatpickr'

// (function eventListeners() {
    
//     const addProjectButton = document.getElementById('addProject');
//     addProjectButton.addEventListener('click',  ()=>{});
// })();
const addProjectButton = document.getElementById('addProject');
function run() {
    const myInput = document.querySelector(".myInput");
const fp = flatpickr(myInput, {});
fp;
}
    addProjectButton.addEventListener('click',  ()=>{run()});
display.appendAllTodos;