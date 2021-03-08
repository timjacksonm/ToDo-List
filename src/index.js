import { display } from './display';
import { ToDo } from './todotask';
import { forms } from './forms';

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
const addProject = document.getElementById('addProject');

class screenEvent {
    static get getNewProject() {
        const projectContainer = document.querySelector('#projContainer');
        projectContainer.querySelector('#newProjForm').addEventListener('submit', (e)=>{
            e.preventDefault();
            myProjects.push(e.target.firstChild.value);
            forms.removeProjectForm;
            display.appendAllProjects;
            this.addProjectListeners;
            addProject.disabled = false;
            console.log('after');
        });
    }
    static get addProjectListeners() {
        const selectProjects = document.querySelector('#projContainer');
        for (let i = 0; i < myProjects.length; i++) {
            selectProjects.children[i].addEventListener('click', ()=>{
                todoContainer.innerHTML = '';
                display.appendAllTodos(myProjects[i])
            });
        } 
    }
    static get addFormListener() {
        const select = document.querySelector('.todoForm');
        select.querySelector('.closebtn').addEventListener('click', ()=>{forms.closeToDoForm});
        select.querySelector('#Submit').addEventListener('click', (e)=>{
            e.preventDefault();
            this.getNewToDo;
            forms.closeToDoForm;
            this.checkProjectSelect;
            display.appendAllTodos(projectSelected);
        });
    }
    static get getNewToDo() {
        const formSelect = document.querySelector('.todoForm');
        myToDos.push(new ToDo(`${formSelect.querySelector('#projectChoice').value}`, `${formSelect.querySelector('#priorityChoice').value}`, 'no', `${formSelect.querySelector('textarea').value}`, `${formSelect.querySelector('input').value}`));
    }
    static get checkProjectSelect() {
        document.querySelector('#projContainer').querySelectorAll('label').forEach(label => {
             if (label.querySelector('input').checked == true) {
                 return projectSelected = label.lastChild.textContent
                }
            })
    }
}

(function winLoad(){
    const addToDo =  document.getElementById('newTodo');
    const closeNav = document.getElementById('closeNav');
    const openNav = document.getElementById('openNav');
    const sliderToggle = document.getElementById('sliderToggle');
    const selectProjects = document.querySelector('#projContainer');
    const todoContainer = document.querySelector('#todoContainer');
    
    sliderToggle.addEventListener('click', ()=>{display.toggleLightDark});
    openNav.addEventListener('click', ()=>{display.openNav});
    closeNav.addEventListener('click', ()=>{display.closeNav});
    addProject.addEventListener('click',  ()=>{addProject.disabled = true; forms.newProjectForm;});
    addToDo.addEventListener('click', ()=>{forms.newToDoForm;});
    window.addEventListener('click', (e)=>{
        if (e.target.offsetWidth > document.getElementById('mySidenav').offsetWidth && document.getElementById('mySidenav').offsetWidth > 100) {
            display.closeNav;
        }
    });
    display.appendAllProjects;
    document.querySelector('#projContainer').firstElementChild.firstChild.checked = "checked";
    display.appendAllTodos('Default');
    screenEvent.addProjectListeners;
})();

export { myProjects, myToDos, screenEvent, projectSelected };