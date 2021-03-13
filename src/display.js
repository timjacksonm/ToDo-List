import { myProjects, myToDos, screenWidth, contentDiv, projectContainer, todoContainer, sliderToggle } from './index';
import { screenEvent } from './events';
import { format, parseISO, endOfDay, formatDistanceToNow } from 'date-fns';
import { sort } from './sort';

class display {
    static appendAllTodos(projectName, sortSelected) {
        todoContainer.innerHTML = '';
        let myToDosSorted = [];
        //configuration for current Nav Selection.
       switch (sortSelected) {
           case 'All':
               myToDosSorted = myToDos;
               break;
            case 'Today':
                myToDosSorted = sort.todayList;
                break;
            case 'Week':
                myToDosSorted = sort.weekList;
                break;
            case 'Month':
                myToDosSorted = sort.monthList;
                break;
           default:
               break;
       }
        for(let i = 0; i < myToDosSorted.length; i++) {
            if(myToDosSorted[i].project == projectName) {
            todoContainer.appendChild(document.createElement('li')).className = 'listItem';
            todoContainer.lastChild.id = 'task' + i;
            todoContainer.lastChild.appendChild(document.createElement('label')).className = 'checkLabel';
            todoContainer.lastChild.querySelector('.checkLabel').setAttribute('for', `${i}`);
            todoContainer.lastChild.firstChild.appendChild(document.createElement('span')).className = 'priority';
            todoContainer.lastChild.querySelector('.priority').style.backgroundColor = myToDosSorted[i].priority;
            todoContainer.lastChild.firstChild.appendChild(document.createElement('input')).id = i;
            document.getElementById(i).setAttribute('type', 'checkbox');
            if(myToDosSorted[i].checked == 'true' || myToDosSorted[i].checked == true){document.getElementById(i).checked = true;}
            todoContainer.lastChild.firstChild.appendChild(document.createElement('span')).className = 'checkmark';
            todoContainer.lastChild.firstChild.appendChild(document.createElement('a')).className = 'labelDisc';
            //if screen is a certain size - shorten discription title and add three ...
            let discName = myToDosSorted[i].discription;
            if(screenWidth == 280){
                if(myToDosSorted[i].discription.length > 10) {
                    discName = myToDosSorted[i].discription.substring(0, 10) + "...";
                }
            }else if(screenWidth > 280 && screenWidth <= 375) {
                if(myToDosSorted[i].discription.length > 16) {
                    discName = myToDosSorted[i].discription.substring(0, 16) + "...";
                }
            }else if(screenWidth > 375 && screenWidth <= 812) {
                if(myToDosSorted[i].discription.length > 25) {
                    discName = myToDosSorted[i].discription.substring(0, 25) + "...";
                }
            }else {
                if(myToDosSorted[i].discription.length > 50) {
                    discName = myToDosSorted[i].discription.substring(0, 50) + "...";
                }
            }
            todoContainer.lastChild.querySelector('.labelDisc').textContent = discName;
            todoContainer.lastChild.querySelector('.labelDisc').setAttribute('href', '#');
            todoContainer.lastChild.firstChild.appendChild(document.createElement('a')).className = 'time';
            todoContainer.lastChild.querySelector('.time').textContent = format(parseISO(myToDosSorted[i].time), 'MM/dd/yyyy');
            todoContainer.lastChild.querySelector('.time').setAttribute('href', '#');
            todoContainer.lastChild.firstChild.appendChild(document.createElement('button')).className = 'modify';
            todoContainer.lastChild.querySelector('.modify').id = i + 'modify';
            todoContainer.lastChild.querySelector('.modify').appendChild(document.createElement('i')).className = 'fa fa-pencil-square-o';
            todoContainer.lastChild.firstChild.appendChild(document.createElement('button')).className = 'delete';
            todoContainer.lastChild.querySelector('.delete').id = i + 'delete';
            todoContainer.lastChild.firstChild.querySelector('.delete').appendChild(document.createElement('i')).className = 'fa fa-trash';
            }
        }
        screenEvent.addTodoListeners;
    }
    static get appendAllProjects() {
        projectContainer.innerHTML = '';
        for(let i = 0; i < myProjects.length; i++) {
            projectContainer.appendChild(document.createElement('label')).className = 'projectListing';
            projectContainer.lastChild.appendChild(document.createElement('input')).setAttribute('name', 'radio');
            projectContainer.lastChild.querySelector('input').type = 'radio';
            projectContainer.lastChild.appendChild(document.createElement('span')).className = 'projSelect';
            projectContainer.lastChild.querySelector('.projSelect').textContent = myProjects[i];
            projectContainer.lastChild.querySelector('.projSelect').appendChild(document.createElement('button')).className = 'projDelete';
            projectContainer.lastChild.querySelector('.projDelete').id = i + 'delete';
            projectContainer.lastChild.querySelector('.projDelete').appendChild(document.createElement('i')).className = 'fa fa-trash';
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
        if(sliderToggle.firstElementChild.checked){
        // //dark mode
        root.style.setProperty('--background-one', '#15202B');
        root.style.setProperty('--background-two', '#1da1f2');
        root.style.setProperty('--border-color', '#192734');
        root.style.setProperty('--hover-color', '#22303C');
        root.style.setProperty('--primary-text', '#FFFFFF');
        root.style.setProperty('--secondary-text', '#8899A6');
        }else {
        //light mode    contentDiv = document.querySelector('.discForm');
        root.style.setProperty('--background-one', '#3B5998');
        root.style.setProperty('--background-two', '#1DA1F2');
        root.style.setProperty('--border-color', '#8B9DC3');
        root.style.setProperty('--hover-color', 'rgba(29, 161, 242, 0.1)');
        root.style.setProperty('--primary-text', '#F7F7F7');
        root.style.setProperty('--secondary-text', '#DFE3EE');
        }
    }
    static infoScreen(key) {
        contentDiv.appendChild(document.createElement('div')).className = 'filter';
        contentDiv.appendChild(document.createElement('div')).className = 'formContainer';
        contentDiv.lastChild.appendChild(document.createElement('form')).className = 'discForm';
        let discScreen = document.querySelector('.discForm');
        discScreen.appendChild(document.createElement('button')).className = 'closebtn';
        discScreen.querySelector('.closebtn').setAttribute('type', 'reset');
        discScreen.querySelector('.closebtn').appendChild(document.createElement('i')).className = 'fa fa-times';
        discScreen.appendChild(document.createElement('h1')).textContent = 'ToDo Discription';
        discScreen.appendChild(document.createElement('p')).textContent = 'Date Due:' + ' ' + format(parseISO(myToDos[key].time), 'PPPP');
        discScreen.appendChild(document.createElement('p')).textContent = 'Time remaining to complete task:' + ' ' + formatDistanceToNow(endOfDay(parseISO(myToDos[key].time))) + '!';
        discScreen.appendChild(document.createElement('h3')).textContent = 'Discription expanded:';
        discScreen.appendChild(document.createElement('p')).textContent = myToDos[key].discription;
        discScreen.lastChild.className = 'discr';
        screenEvent.addFormListener('formDisc');
    }
};
export { display };