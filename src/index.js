import { display } from './display';
import { ToDo } from './todotask';
import { forms } from './forms';
import { sort } from './sort';
const addProject = document.getElementById('addProject');
const addToDo =  document.getElementById('newTodo');
const closeNav = document.getElementById('closeNav');
const openNav = document.getElementById('openNav');
const sliderToggle = document.getElementById('sliderToggle');
const projectContainer = document.querySelector('#projContainer');
const todoContainer = document.querySelector('#todoContainer');

let myProjects = [];
let myToDos = [];
let projectSelected = '';

const todo1 = new ToDo('Chores','Red', 'true', 'Cook Dinner', '2021-04-1T12:00');
const todo2 = new ToDo('School','Orange', 'false', 'Feed Dog', '2021-03-29T12:00');
const todo3 = new ToDo('Work','Green', 'false', 'Shovel Snow', '2021-03-24T12:00');
const todo4 = new ToDo('Default', 'Green', 'false', 'todo discription', '2021-03-29T12:00');
const todo5 = new ToDo('Default', 'Red', 'false', 'test 1234', '2021-03-28T12:00');
const todo6 = new ToDo('Default', 'Green', 'false', 'zander the cat', '2021-03-13T12:00');
const todo7 = new ToDo('Default', 'Red', 'false', 'bandit the dog', '2021-03-14T12:00');
const todo8 = new ToDo('Default', 'Orange', 'false', 'todo discription', '2021-03-09T12:00');
const todo9 = new ToDo('Default', 'Orange', 'false', 'asldfjasldfjsfd', '2021-03-09T12:00');
myProjects.push('Default', todo1.project, todo2.project, todo3.project);
myToDos.push(todo1, todo2, todo3, todo4, todo5, todo6, todo7, todo8, todo9);

class screenEvent {
    static get getNewProject() {
        projectContainer.querySelector('#newProjForm').addEventListener('submit', (e)=>{
            e.preventDefault();
            myProjects.push(e.target.firstChild.value);
            forms.removeProjectForm;
            display.appendAllProjects;
            this.addProjectListeners;
            addProject.disabled = false;
        });
    }
    static get addProjectListeners() {
        for (let i = 0; i < myProjects.length; i++) {
            projectContainer.children[i].addEventListener('click', ()=>{
            todoContainer.innerHTML = '';
            display.appendAllTodos(myProjects[i])
            });
        } 
    }
    static get addTodoListeners() {
        const checkBoxs = todoContainer.querySelectorAll('input');
        const discrButton = todoContainer.querySelectorAll('.labelDisc');
        const modifyButton = document.querySelectorAll('.modify');
        const deleteButton = document.querySelectorAll('.delete');
//When checkBox is checked - updates myToDos Array - updates DOM
        checkBoxs.forEach(input => {
            input.addEventListener('change', (e)=>{
                let key = e.target.id;
                myToDos[key].setChecked(e.target.checked);
            })
        });
//When the discription of a todo is clicked. Opens window displaying more information.
        discrButton.forEach(disc => {
            disc.addEventListener('click', (e)=>{
                let key = e.target.parentNode.querySelector('input').id;
                display.discription(key);
            });
        });
//When modify button is clicked. Opens window allowing changes to the current ToDo.
        modifyButton.forEach(button => {button.addEventListener('click', (e)=>{
            forms.todoForm('modify', e);
        })
    });
//When delete button is clicked. updates myToDos Array - updates DOM
        deleteButton.forEach(button => {
            button.addEventListener('click', (e)=>{
                let key = '';
                if(e.target.className == 'fa fa-trash') {
                   key = e.target.parentNode.id.charAt(0);
                   myToDos.splice(key, 1);
                   this.checkProjectSelect;
                   display.appendAllTodos(projectSelected);
                }else {
                    key = e.target.id.charAt(0);
                    myToDos.splice(key, 1);
                    this.checkProjectSelect;
                    display.appendAllTodos(projectSelected);
                }
        })
    });
}
    static addFormListener(status, key) {
        const formSelect = document.querySelector('.todoForm');
        formSelect.querySelector('.closebtn').addEventListener('click', ()=>{forms.closeToDoForm});
        switch (status) {
            case 'new':
                formSelect.querySelector('#Submit').addEventListener('click', (e)=>{
                    e.preventDefault();
                    this.getToDoFormData('new', 'none');
                    forms.closeToDoForm;
                    this.checkProjectSelect;
                    display.appendAllTodos(projectSelected);
                });
                break;
            case 'modify':
                formSelect.querySelector('#Submit').addEventListener('click', (e)=>{
                    e.preventDefault();
                    this.getToDoFormData('modify', key);
                    forms.closeToDoForm;
                    this.checkProjectSelect;
                    display.appendAllTodos(projectSelected);
                });
                break;
            default:
                break;
        }
    }
    static getToDoFormData(formstatus, key) {
        if(formstatus == 'new') {
            const formSelect = document.querySelector('.todoForm');
            myToDos.push(new ToDo(`${formSelect.querySelector('#projectChoice').value}`, `${formSelect.querySelector('#priorityChoice').value}`, 'no', `${formSelect.querySelector('textarea').value}`, `${formSelect.querySelector('input').value}`));
        }else {
            const formSelect = document.querySelector('.todoForm');
            myToDos[key].setProject(formSelect.querySelector('#projectChoice').value);
            myToDos[key].setPriority(formSelect.querySelector('#priorityChoice').value); 
            myToDos[key].setDiscription(formSelect.querySelector('textarea').value);
            myToDos[key].setTime(formSelect.querySelector('input').value);
        }
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
    sliderToggle.addEventListener('click', ()=>{display.toggleLightDark});
    openNav.addEventListener('click', ()=>{display.openNav});
    closeNav.addEventListener('click', ()=>{display.closeNav});
    addProject.addEventListener('click',  ()=>{addProject.disabled = true; forms.newProjectForm;});
    addToDo.addEventListener('click', ()=>{forms.todoForm('new');});
    window.addEventListener('click', (e)=>{
        if (e.target.offsetWidth > document.getElementById('mySidenav').offsetWidth && document.getElementById('mySidenav').offsetWidth > 100) {
            display.closeNav;
        }
    });
    display.appendAllProjects;
    document.querySelector('#projContainer').firstElementChild.firstChild.checked = "checked";
    display.appendAllTodos('Default');
    screenEvent.addProjectListeners;
    sort.todayList;
    sort.weekList;
    sort.monthList;
})();

export { myProjects, myToDos, screenEvent, projectSelected };