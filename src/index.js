import { display } from './display';
import { ToDo } from './todotask';
import { forms } from './forms';
import { format, addDays } from 'date-fns';
const addProjectButton = document.getElementById('addProject');
const addToDoButton =  document.getElementById('newTodo');
const closeNav = document.getElementById('closeNav');
const openNav = document.getElementById('openNav');
const sliderToggle = document.getElementById('sliderToggle');
const projectContainer = document.querySelector('#projContainer');
const sortContainer = document.querySelector('#sortContainer');
const todoContainer = document.querySelector('#todoContainer');

let myProjects = [];
let myToDos = [];
let projectSelected = '';
let sortSelected = '';
let screenWidth = '';

const todo9 = new ToDo('Test1', 'Green', 'false', 'Create a new project in the nav menu! Be careful not to delete a project that has task you want to keep!', `${format(new Date(), 'yyyy-MM-dd')}`);
const todo8 = new ToDo('Test1', 'Green', 'false', 'Delete Me!', `${format(addDays(new Date(), 8), 'yyyy-MM-dd')}`);
const todo7 = new ToDo('Test1', 'Red', 'false', 'Modify Me!', `${format(addDays(new Date(), 3), 'yyyy-MM-dd')}`);
const todo6 = new ToDo('Test1', 'Orange', 'false', 'This task test that (checked) works as intended and is saved if you switch to a different project.', `${format(addDays(new Date(), 3), 'yyyy-MM-dd')}`);
const todo5 = new ToDo('Test1', 'Green', 'false', 'This task test the character limit for this discription title. Once you click the discription title a new info window will appear. You can read this full discription inside that window!', `${format(new Date(), 'yyyy-MM-dd')}`);
const todo4 = new ToDo('Test1', 'Green', 'false', 'Go ahead Add a new Task to this project by clicking the + button above!', `${format(new Date(), 'yyyy-MM-dd')}`);
const todo3 = new ToDo('Default', 'Red', 'false', 'This task is displayed for All, Month. Unless you are veiwing this page within the last 8 days of the current month!', `${format(addDays(new Date(), 8), 'yyyy-MM-dd')}`);
const todo2 = new ToDo('Default', 'Orange', 'false', 'This task is displayed for this Week / Month. Unless you are veiwing this page on the last day of the current week!', `${format(addDays(new Date(), 1), 'yyyy-MM-dd')}`);
const todo1 = new ToDo('Default', 'Green', 'false', 'This task is displayed for any sort selection.', `${format(new Date(), 'yyyy-MM-dd')}`);
myProjects.push(todo1.project, todo4.project);
myToDos.push(todo1, todo2, todo3, todo4, todo5, todo6, todo7, todo8, todo9);

class screenEvent {
    static get addProjectListeners() {
        //evetnListeners for each named project - when clicked appends to page based on sort selection.
        for (let i = 0; i < myProjects.length; i++) {
            projectContainer.children[i].addEventListener('click', (e)=>{
                if(e.target.tagName == 'INPUT') {
                    this.checkNavSelections;
                    display.appendAllTodos(myProjects[i], sortSelected);
                }
            });
        }
        //eventListener for submitting new project
        projectContainer.addEventListener('submit', (e)=>{
            e.preventDefault();
            if(e.target.firstChild.value !== '') {
                myProjects.push(e.target.firstChild.value);
                display.appendAllProjects;
                this.addProjectListeners;
                addProject.disabled = false;
            }else  {
                e.target.firstChild.required = true;
                document.querySelector("#newProjForm > input[type=text]").style.outlineColor = 'red';
            }
        });
        //eventListener for deleting a project.
        const deleteButton = document.querySelectorAll('.projDelete');
        //When delete button is clicked. updates myToDos Array - updates myProjects Array - updates DOM
                deleteButton.forEach(button => {
                    button.addEventListener('click', (e)=>{
                        let key = '';
                        if(e.target.className == 'fa fa-trash') {
                           key = e.target.parentNode.id.charAt(0);
                           function confirmWindow() {
                               const choice = confirm('Delete' + ' ' + `"${myProjects[key]}"?` + ' ' + 'Confirm will delete this project and all todo/s assigned to it.');
                               if(choice == true) {
                                   const projectName = myProjects[key];
                                   let afterRemove = [];
                                   for (let i = 0; i < myToDos.length; i++) {
                                       if(myToDos[i].project !== projectName) {
                                            afterRemove.push(myToDos[i]);
                                       }
                                   }
                                   myToDos = afterRemove;
                                   myProjects.splice(key, 1);
                                   display.appendAllProjects;
                                   screenEvent.addProjectListeners;
                                   document.querySelector('#projContainer').querySelector('input').checked = 'checked';
                                    screenEvent.checkNavSelections;
                                    display.appendAllTodos(projectSelected, sortSelected);
                               }
                           }
                           confirmWindow();
                           
                        }else {
                            key = e.target.id.charAt(0);
                            myToDos.splice(key, 1);
                            this.checkNavSelections
                            display.appendAllTodos(projectSelected, sortSelected);
                        }
                })
            });
    }
    static get addSortListeners() {
        for (let i = 0; i < sortContainer.children.length; i++) {
            sortContainer.children[i].addEventListener('click', (e)=>{
                if(e.target.tagName == 'INPUT') {
                    this.checkNavSelections;
                    display.appendAllTodos(projectSelected, sortSelected);
                }
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
                   this.checkNavSelections;
                   display.appendAllTodos(projectSelected, sortSelected);
                }else {
                    key = e.target.id.charAt(0);
                    myToDos.splice(key, 1);
                    this.checkNavSelections
                    display.appendAllTodos(projectSelected, sortSelected);
                }
        })
    });
    }
    static addFormListener(status, key) {
        const formSelect = document.querySelector('.formContainer').firstChild;
        formSelect.querySelector('.closebtn').addEventListener('click', ()=>{forms.closeToDoForm});
        switch (status) {
            case 'new':
                formSelect.querySelector('#Submit').addEventListener('click', (e)=>{
                    e.preventDefault();
                    let completed = this.getToDoFormData('new', 'none');
                    if(completed == true) {
                        forms.closeToDoForm;
                        this.checkNavSelections;
                        display.appendAllTodos(projectSelected, sortSelected);
                    }
                });
                break;
            case 'modify':
                formSelect.querySelector('#Submit').addEventListener('click', (e)=>{
                    e.preventDefault();
                    let completed = this.getToDoFormData('modify', key);
                    if(completed == true) {
                        forms.closeToDoForm;
                        this.checkNavSelections;
                        display.appendAllTodos(projectSelected, sortSelected);
                    }
                });
                break;
            default:
                break;
        }
    }
    static getToDoFormData(formstatus, key) {
        let completed = forms.validation('new');      
        if(formstatus == 'new') {
            if(completed == true) {
                const formSelect = document.querySelector('.todoForm');
                myToDos.push(new ToDo(`${formSelect.querySelector('#projectChoice').value}`, `${formSelect.querySelector('#priorityChoice').value}`, 'no', `${formSelect.querySelector('textarea').value}`, `${formSelect.querySelector('input').value}`));
                return true;
            }else {
                return false;
            }
        }else {
            if(completed == true) {
                const formSelect = document.querySelector('.todoForm');
                myToDos[key].setProject(formSelect.querySelector('#projectChoice').value);
                myToDos[key].setPriority(formSelect.querySelector('#priorityChoice').value); 
                myToDos[key].setDiscription(formSelect.querySelector('textarea').value);
                myToDos[key].setTime(formSelect.querySelector('input').value);
                return true;
            }else {
                return false;
            }
        }
    }
    static get checkNavSelections() {
        document.querySelector('#projContainer').querySelectorAll('label').forEach(label => {
             if (label.querySelector('input').checked == true) {
                 return projectSelected = label.lastElementChild.textContent
                }
            })
        document.querySelector('#sortContainer').querySelectorAll('label').forEach(label => {
            if (label.querySelector('input').checked == true) {
                return sortSelected = label.lastElementChild.textContent
            }
        })
    }
}
(function winLoad(){
    screenWidth = window.screen.availWidth;
    sliderToggle.addEventListener('click', ()=>{display.toggleLightDark});
    openNav.addEventListener('click', ()=>{display.openNav});
    closeNav.addEventListener('click', ()=>{display.closeNav});
    addProjectButton.addEventListener('click',  ()=>{addProject.disabled = true; forms.newProjectForm;});
    addToDoButton.addEventListener('click', ()=>{forms.todoForm('new');});
    //first window Listener auto closes nav if clicked outside of nav window.
    window.addEventListener('click', (e)=>{
        if (e.target.offsetWidth > document.getElementById('mySidenav').offsetWidth && document.getElementById('mySidenav').offsetWidth > 100) {
            display.closeNav;
        }
    });
    //mobile orientation change - updates discription title character length.
    window.addEventListener('orientationchange', (e)=> {
        screenWidth = e.target.screen.availWidth;
        screenEvent.checkNavSelections;
        display.appendAllTodos(projectSelected, sortSelected);
    });
    display.appendAllProjects;
    //selects first sort seleciton 'all' & first named project 'default'
    projectContainer.querySelector('input').checked = 'checked';
    sortContainer.querySelector('input').checked = 'checked';
    screenEvent.addProjectListeners;
    screenEvent.addSortListeners;
    screenEvent.checkNavSelections;
    display.appendAllTodos(projectSelected, sortSelected);
})();

console.log(localStorage);
export { myProjects, myToDos, screenEvent, projectSelected, sortSelected, screenWidth };