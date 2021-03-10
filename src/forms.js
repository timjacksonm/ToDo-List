import { screenEvent, myProjects, myToDos, projectSelected } from './index';
import { format } from 'date-fns'
class forms {
    static todoForm(status, clickevent) {
        let key = '';
        if(status == 'modify') {
            if(clickevent.target.className == 'fa fa-pencil-square-o') {
                key = clickevent.target.parentNode.id.charAt(0);
             }else {
                 key = clickevent.target.id.charAt(0);
             }
        }
        let select = document.querySelector('#content');
        select.appendChild(document.createElement('div')).className = 'filter';
        select.appendChild(document.createElement('div')).className = 'formContainer';
        select.lastChild.appendChild(document.createElement('form')).className = 'todoForm';
        select = document.querySelector('.todoForm');
        select.appendChild(document.createElement('button')).className = 'closebtn';
        select.querySelector('.closebtn').setAttribute('type', 'reset');
        select.querySelector('.closebtn').appendChild(document.createElement('i')).className = 'fa fa-times';
        if(status == 'new') {
            select.appendChild(document.createElement('h1')).textContent = 'New ToDo';
        }else {
            select.appendChild(document.createElement('h1')).textContent = 'Modify ToDo';
            }
        select.appendChild(document.createElement('p')).textContent = 'Project select'
        select.appendChild(document.createElement('select')).id = 'projectChoice';
        select = document.querySelector('#projectChoice');
         for (let i = 0; i < myProjects.length; i++) {
            select.appendChild(document.createElement('option')).textContent = myProjects[i];
         }
         screenEvent.checkProjectSelect;
         select.value = projectSelected;
        select = document.querySelector('.todoForm');
        select.appendChild(document.createElement('p')).textContent = 'Priority level';
        select.appendChild(document.createElement('select')).id = 'priorityChoice';
        select = document.querySelector('#priorityChoice');
        select.appendChild(document.createElement('option')).textContent = 'Low';
        select.options[0].value = 'Green';
        select.appendChild(document.createElement('option')).textContent = 'Medium';
        select.options[1].value = 'Orange';
        select.appendChild(document.createElement('option')).textContent = 'High';
        select.options[2].value = 'Red';
        if(status == 'modify') {
            select.value = myToDos[key].priority;
        }
        select = document.querySelector('.todoForm');
        select.appendChild(document.createElement('p')).textContent = 'Discription';
        select.appendChild(document.createElement('textarea')).setAttribute('rows', '4');
        if(status == 'modify') {
            select.querySelector('textarea').textContent = myToDos[key].discription;
        }
        select.appendChild(document.createElement('p')).textContent = 'When should this task be completed by?';
        select.appendChild(document.createElement('input'))
        select.querySelector('input').type = 'date';
        if(status == 'modify') {
            select.querySelector('input').value = format((new Date(myToDos[key].time)), 'yyyy-MM-dd');
        }
        select.appendChild(document.createElement('button')).id = 'Submit';
        select.querySelector('#Submit').textContent = 'Submit';
        if(status == 'new') {
            screenEvent.addFormListener('new', 'none');
        }else {
            screenEvent.addFormListener('modify', key);
        }
    }
    static get closeToDoForm() {
        document.querySelector('#content').removeChild(document.querySelector('.formContainer'));
        document.querySelector('#content').removeChild(document.querySelector('.filter'));
    }
    static get newProjectForm() {
        const projectContainer = document.querySelector('#projContainer');
        projectContainer.appendChild(document.createElement('form')).id = 'newProjForm';
        projectContainer.querySelector('#newProjForm').setAttribute('submit', 'e.preventDefault();')
        projectContainer.lastChild.appendChild(document.createElement('input')).value = 'New Project';
        projectContainer.lastChild.lastChild.type = 'text';
        projectContainer.lastChild.lastChild.focus();
        screenEvent.getNewProject;
    }
    static get removeProjectForm() {
        document.querySelector('#projContainer').lastChild.innerHTML = '';
    }
    static get formValidation() {
        
    }
}
export { forms };