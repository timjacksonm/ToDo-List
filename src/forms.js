import { screenEvent, myProjects, myToDos, projectSelected } from './index';
class forms {
    static get newToDoForm() {
        let select = document.querySelector('#content');
        select.appendChild(document.createElement('div')).className = 'filter';
        select.appendChild(document.createElement('div')).className = 'formContainer';
        select.lastChild.appendChild(document.createElement('form')).className = 'todoForm';
        select = document.querySelector('.todoForm');
        select.appendChild(document.createElement('button')).className = 'closebtn';
        select.querySelector('.closebtn').setAttribute('type', 'reset');
        select.querySelector('.closebtn').appendChild(document.createElement('i')).className = 'fa fa-times';
        select.appendChild(document.createElement('h1')).textContent = 'New ToDo';
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
        select = document.querySelector('.todoForm');
        select.appendChild(document.createElement('p')).textContent = 'Discription';
        select.appendChild(document.createElement('textarea')).setAttribute('rows', '4');
        select.appendChild(document.createElement('p')).textContent = 'When should this task be completed by?';
        select.appendChild(document.createElement('input')).setAttribute('placeholder', 'mm/dd/yyyy, -:-- --')
        select.querySelector('input').type = 'datetime-local';
        select.appendChild(document.createElement('button')).id = 'Submit';
        select.querySelector('#Submit').textContent = 'Submit';

        screenEvent.addFormListener('todoForm');
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
}
export { forms };