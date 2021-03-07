import { screenEvent, myProjects, myToDos, projectSelected } from './index';

class display {
    static appendAllTodos(projectName) {
        const selectContainer = document.querySelector('#todoContainer');
        selectContainer.innerHTML = '';
       
        for (let i = 0; i < myToDos.length; i++) {
            if (myToDos[i].project == projectName) {
            selectContainer.appendChild(document.createElement('li')).className = 'listItem';
            selectContainer.lastChild.appendChild(document.createElement('label')).className = 'checkLabel';
            selectContainer.lastChild.querySelector('.checkLabel').setAttribute('for', `${i}`);
            selectContainer.lastChild.firstChild.appendChild(document.createElement('span')).className = 'priority';
            selectContainer.lastChild.querySelector('.priority').style.backgroundColor = myToDos[i].priority;
            selectContainer.lastChild.firstChild.appendChild(document.createElement('input')).id = i;
            document.getElementById(i).setAttribute('type', 'checkbox');
            selectContainer.lastChild.firstChild.appendChild(document.createElement('span')).className = 'checkmark';
            selectContainer.lastChild.firstChild.appendChild(document.createElement('a')).className = 'labelDisc';
            selectContainer.lastChild.querySelector('.labelDisc').textContent = myToDos[i].discription;
            selectContainer.lastChild.firstChild.appendChild(document.createElement('a')).className = 'time';
            selectContainer.lastChild.querySelector('.time').textContent = myToDos[i].time;
            selectContainer.lastChild.firstChild.appendChild(document.createElement('button')).className = 'modify';
            selectContainer.lastChild.firstChild.querySelector('.modify').appendChild(document.createElement('i')).className = 'fa fa-pencil-square-o';
            selectContainer.lastChild.firstChild.appendChild(document.createElement('button')).className = 'delete';
            selectContainer.lastChild.firstChild.querySelector('.delete').appendChild(document.createElement('i')).className = 'fa fa-trash';
            }
        }
    }
    static get appendAllProjects() {
        const selectNavContainer = document.querySelector('#projContainer');
        for (let i = 0; i < myProjects.length; i++) {
            selectNavContainer.appendChild(document.createElement('label')).className = 'projectListing';
            selectNavContainer.lastChild.appendChild(document.createElement('input')).setAttribute('name', 'radio');
            selectNavContainer.lastChild.querySelector('input').type = 'radio';
            selectNavContainer.lastChild.appendChild(document.createElement('span')).className = 'projSelect';
            selectNavContainer.lastChild.querySelector('.projSelect').textContent = myProjects[i];
        }
    }
    static get openNav() {
        document.getElementById("mySidenav").style.width = "25vh";
      }
    static get closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
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

        screenEvent.addFormListener;
    }
    static get closeToDoForm() {
        document.querySelector('#content').removeChild(document.querySelector('.formContainer'));
        document.querySelector('#content').removeChild(document.querySelector('.filter'));
    }
    static get toggleLightDark() {
        const root = document.documentElement;
        const sliderSelect = document.querySelector('label');

        if(sliderSelect.firstElementChild.checked){
        // //dark mode
        root.style.setProperty('--background-one', '#15202B');
        root.style.setProperty('--background-two', '#1da1f2');
        root.style.setProperty('--border-color', '#192734');
        root.style.setProperty('--hover-color', '#22303C');
        root.style.setProperty('--primary-text', '#FFFFFF');
        root.style.setProperty('--secondary-text', '#8899A6');
        }else {
        //light mode
        root.style.setProperty('--background-one', '#3B5998');
        root.style.setProperty('--background-two', '#1DA1F2');
        root.style.setProperty('--border-color', '#8B9DC3');
        root.style.setProperty('--hover-color', 'rgba(29, 161, 242, 0.1)');
        root.style.setProperty('--primary-text', '#F7F7F7');
        root.style.setProperty('--secondary-text', '#DFE3EE');
        }
    }
};
export { display };