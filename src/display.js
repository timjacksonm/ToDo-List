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
        selectNavContainer.innerHTML = '';

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