import { myProjects, myToDos, contentDiv, projectContainer } from './index';
import { screenEvent, projectSelected } from './events';
import { format } from 'date-fns';
class forms {
    static todoForm(status, clickevent) {
        let key = '';
        if(status == 'modify') {
            if(clickevent.target.className == 'fa fa-pencil-square-o') {
                key = clickevent.target.parentNode.id.match(/\d+/)[0];
             }else {
                 key = clickevent.target.id.modfiy.match(/\d+/)[0];
             }
        }
        contentDiv.appendChild(document.createElement('div')).className = 'filter';
        contentDiv.appendChild(document.createElement('div')).className = 'formContainer';
        contentDiv.lastChild.appendChild(document.createElement('form')).className = 'todoForm';
        let form = document.querySelector('.todoForm');
        form.appendChild(document.createElement('button')).className = 'closebtn';
        form.querySelector('.closebtn').setAttribute('type', 'reset');
        form.querySelector('.closebtn').appendChild(document.createElement('i')).className = 'fa fa-times';
        if(status == 'new') {
            form.appendChild(document.createElement('h1')).textContent = 'New ToDo';
        }else {
            form.appendChild(document.createElement('h1')).textContent = 'Modify ToDo';
            }
        form.appendChild(document.createElement('p')).textContent = 'Project select'
        form.appendChild(document.createElement('select')).id = 'projectChoice';
        let projectChoices = form.querySelector('#projectChoice');
        for(let i = 0; i < myProjects.length; i++) {
           projectChoices.appendChild(document.createElement('option')).textContent = myProjects[i];
        }
        screenEvent.checkNavSelections;
        projectChoices.value = projectSelected;
        form.appendChild(document.createElement('p')).textContent = 'Priority level';
        form.appendChild(document.createElement('select')).id = 'priorityChoice';
        let priorityChoices = form.querySelector('#priorityChoice');
        priorityChoices.appendChild(document.createElement('option')).textContent = 'Low';
        priorityChoices.options[0].value = 'Green';
        priorityChoices.appendChild(document.createElement('option')).textContent = 'Medium';
        priorityChoices.options[1].value = 'Orange';
        priorityChoices.appendChild(document.createElement('option')).textContent = 'High';
        priorityChoices.options[2].value = 'Red';
        if(status == 'modify') {
            priorityChoices.value = myToDos[key].priority;
        }
        form.appendChild(document.createElement('p')).textContent = 'Discription';
        form.appendChild(document.createElement('textarea')).setAttribute('rows', '4');
        if(status == 'modify') {
            form.querySelector('textarea').textContent = myToDos[key].discription;
        }
        form.appendChild(document.createElement('p')).textContent = 'When should this task be completed by?';
        form.appendChild(document.createElement('input'))
        form.querySelector('input').type = 'date';
        if(status == 'modify') {
            form.querySelector('input').value = format((new Date(myToDos[key].time)), 'yyyy-MM-dd');
        }
        form.appendChild(document.createElement('button')).id = 'Submit';
        form.querySelector('#Submit').textContent = 'Submit';
        if(status == 'new') {
            screenEvent.addFormListener('new', 'none');
        }else {
            screenEvent.addFormListener('modify', key);
        }
    }
    static get closeToDoForm() {
        contentDiv.removeChild(contentDiv.lastChild);
        contentDiv.removeChild(contentDiv.lastChild);
    }
    static get newProjectForm() {
        projectContainer.appendChild(document.createElement('form')).id = 'newProjForm';
        projectContainer.querySelector('#newProjForm').setAttribute('submit', 'e.preventDefault();')
        projectContainer.lastChild.appendChild(document.createElement('input')).value = 'New Project';
        projectContainer.lastChild.lastChild.type = 'text';
        projectContainer.lastChild.lastChild.focus();
    }
    static get removeProjectForm() {
        projectContainer.removeChild(projectContainer.lastChild);
    }
    static validation(formType) {
        const selectForm = document.querySelector('.todoForm');
        if(formType == 'new') {
            if (selectForm[4].value == '' || selectForm[3].value == '') {
                selectForm[4].style.border = '1px solid red';
                selectForm[3].style.border = '1px solid red';
                return false;
            }else {
                return true;
            }
        }else {

        }
    }
}
export { forms };