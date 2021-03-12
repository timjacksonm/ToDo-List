import { display } from './display';
import { ToDo } from './todotask';
import { forms } from './forms';
import { format, addDays } from 'date-fns';
import { screenEvent, projectSelected, sortSelected } from './events';

const addProjectButton = document.getElementById('addProject');
const addToDoButton =  document.getElementById('newTodo');
const closeNav = document.getElementById('closeNav');
const openNav = document.getElementById('openNav');
const sliderToggle = document.getElementById('sliderToggle');
const projectContainer = document.querySelector('#projContainer');
const sortContainer = document.querySelector('#sortContainer');

let myProjects = [];
let myToDos = [];
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

export { myProjects, myToDos, screenEvent, screenWidth };