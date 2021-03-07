import { display, myProjects } from './display';
import _ from 'date-fns'
import { faIR } from 'date-fns/locale';

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
        let projectName = myProjects[i];
        selectProjects.children[i].addEventListener('click', ()=>{todoContainer.innerHTML = ''; display.appendAllTodos(projectName)});
    } 
})();