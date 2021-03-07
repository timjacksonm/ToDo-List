import { display } from './display';
import _ from 'date-fns'

const addProject = document.getElementById('addProject');
const addToDo =  document.getElementById('newTodo');
const closeNav = document.getElementById('closeNav');
const openNav = document.getElementById('openNav');
const sliderToggle = document.getElementById('sliderToggle');
sliderToggle.addEventListener('click', ()=>{display.toggleLightDark});
openNav.addEventListener('click', ()=>{display.openNav});
closeNav.addEventListener('click', ()=>{display.closeNav});
addProject.addEventListener('click',  ()=>{run()});
addToDo.addEventListener('click', ()=>{display.newToDoForm;});
display.appendAllProjects;
document.querySelector('#projContainer').firstElementChild.firstChild.checked = "checked";
display.appendAllTodos;