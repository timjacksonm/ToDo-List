import { display } from './display';
import _ from 'date-fns'
import { ToDo } from './todotask';
import { faIR } from 'date-fns/locale';

let myProjects = [];
let myToDos = [];
let projectSelected = '';
const todo1 = new ToDo('Chores','Red', 'yes', 'Cook Dinner', 'Time');
const todo2 = new ToDo('School','Orange', 'no', 'Feed Dog', 'Time');
const todo3 = new ToDo('Work','Green', 'no', 'Shovel Snow', 'Time');
const todo4 = new ToDo('Default', 'Green', 'yes', 'todo discription', 'Time');
const todo5 = new ToDo('Default', 'Red', 'no', 'test 1234', 'Time');
const todo6 = new ToDo('Default', 'Green', 'no', 'zander the cat', 'Time');
const todo7 = new ToDo('Default', 'Red', 'no', 'bandit the dog', 'Time');
const todo8 = new ToDo('Default', 'Orange', 'no', 'todo discription', 'Time');
const todo9 = new ToDo('Default', 'Orange', 'no', 'asldfjasldfjsfd', 'Time');
myProjects.push('Default', todo1.project, todo2.project, todo3.project);
myToDos.push(todo1, todo2, todo3, todo4, todo5, todo6, todo7, todo8, todo9);
console.log(myToDos);
console.log(myProjects);

display.appendAllProjects;

(function winLoad(){
    const addProject = document.getElementById('addProject');
    const addToDo =  document.getElementById('newTodo');
    const closeNav = document.getElementById('closeNav');
    const openNav = document.getElementById('openNav');
    const sliderToggle = document.getElementById('sliderToggle');
    const selectProjects = document.querySelector('#projContainer');
    const todoContainer = document.querySelector('#todoContainer');
    
    sliderToggle.addEventListener('click', ()=>{display.toggleLightDark});
    openNav.addEventListener('click', ()=>{display.openNav});
    closeNav.addEventListener('click', ()=>{display.closeNav});
    addProject.addEventListener('click',  ()=>{run()});
    addToDo.addEventListener('click', ()=>{display.newToDoForm;});
    document.querySelector('#projContainer').firstElementChild.firstChild.checked = "checked";
    display.appendAllTodos('Default');

    for (let i = 0; i < myProjects.length; i++) {
        selectProjects.children[i].addEventListener('click', ()=>{todoContainer.innerHTML = ''; display.appendAllTodos(myProjects[i])});
    } 
})();

class screenEvent {
    static get addFormListener() {
        const select = document.querySelector('.todoForm');
        select.querySelector('.closebtn').addEventListener('click', ()=>{display.closeToDoForm});
        select.querySelector('#Submit').addEventListener('click', (e)=>{e.preventDefault(); this.getNewToDo; display.closeToDoForm; this.checkProjectSelect; display.appendAllTodos(projectSelected);});
    }
    static get getNewToDo() {
        const formSelect = document.querySelector('.todoForm');
        myToDos.push(new ToDo(`${formSelect.querySelector('#projectChoice').value}`, `${formSelect.querySelector('#priorityChoice').value}`, 'no', `${formSelect.querySelector('textarea').value}`, `${formSelect.querySelector('input').value}`));
    }
    static get checkProjectSelect() {
        document.querySelector('#projContainer').querySelectorAll('label').forEach(label => {
             if (label.querySelector('input').checked == true) { return projectSelected = label.lastChild.textContent }})
    }
}

export { myProjects, myToDos, screenEvent };