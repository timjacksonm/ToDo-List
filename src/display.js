import { screenEvent, myProjects, myToDos, screenWidth } from './index';
import { format, formatDistanceToNowStrict, parseISO } from 'date-fns'
import { sort } from './sort';

class display {
    static appendAllTodos(projectName, sortSelected) {
        const selectContainer = document.querySelector('#todoContainer');
        selectContainer.innerHTML = '';
        let myToDosSorted = [];
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
        for (let i = 0; i < myToDosSorted.length; i++) {
            if (myToDosSorted[i].project == projectName) {
            selectContainer.appendChild(document.createElement('li')).className = 'listItem';
            selectContainer.lastChild.id = 'task' + i;
            selectContainer.lastChild.appendChild(document.createElement('label')).className = 'checkLabel';
            selectContainer.lastChild.querySelector('.checkLabel').setAttribute('for', `${i}`);
            selectContainer.lastChild.firstChild.appendChild(document.createElement('span')).className = 'priority';
            selectContainer.lastChild.querySelector('.priority').style.backgroundColor = myToDosSorted[i].priority;
            selectContainer.lastChild.firstChild.appendChild(document.createElement('input')).id = i;
            document.getElementById(i).setAttribute('type', 'checkbox');
            if(myToDosSorted[i].checked == 'true' || myToDosSorted[i].checked == true){document.getElementById(i).checked = true;}
            selectContainer.lastChild.firstChild.appendChild(document.createElement('span')).className = 'checkmark';
            selectContainer.lastChild.firstChild.appendChild(document.createElement('a')).className = 'labelDisc';
            let discName = myToDosSorted[i].discription;
            //mediaquerie info for longer character limit on discription.
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
            selectContainer.lastChild.querySelector('.labelDisc').textContent = discName;
            selectContainer.lastChild.querySelector('.labelDisc').setAttribute('href', '#');
            selectContainer.lastChild.firstChild.appendChild(document.createElement('a')).className = 'time';
            selectContainer.lastChild.querySelector('.time').textContent = format(parseISO(myToDosSorted[i].time), 'MM/dd/yyyy');
            selectContainer.lastChild.querySelector('.time').setAttribute('href', '#');
            selectContainer.lastChild.firstChild.appendChild(document.createElement('button')).className = 'modify';
            selectContainer.lastChild.querySelector('.modify').id = i + 'modify';
            selectContainer.lastChild.querySelector('.modify').appendChild(document.createElement('i')).className = 'fa fa-pencil-square-o';
            selectContainer.lastChild.firstChild.appendChild(document.createElement('button')).className = 'delete';
            selectContainer.lastChild.querySelector('.delete').id = i + 'delete';
            selectContainer.lastChild.firstChild.querySelector('.delete').appendChild(document.createElement('i')).className = 'fa fa-trash';
            }
        }
        screenEvent.addTodoListeners;
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
            selectNavContainer.lastChild.querySelector('.projSelect').appendChild(document.createElement('button')).className = 'projDelete';
            selectNavContainer.lastChild.querySelector('.projDelete').id = i + 'delete';
            selectNavContainer.lastChild.querySelector('.projDelete').appendChild(document.createElement('i')).className = 'fa fa-trash';
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
    static discription(key) {
        let date = new Date(myToDos[key].time)
        let select = document.querySelector('#content');
        select.appendChild(document.createElement('div')).className = 'filter';
        select.appendChild(document.createElement('div')).className = 'formContainer';
        select.lastChild.appendChild(document.createElement('form')).className = 'discForm';
        select = document.querySelector('.discForm');
        select.appendChild(document.createElement('button')).className = 'closebtn';
        select.querySelector('.closebtn').setAttribute('type', 'reset');
        select.querySelector('.closebtn').appendChild(document.createElement('i')).className = 'fa fa-times';
        select.appendChild(document.createElement('h1')).textContent = 'ToDo Discription';
        select.appendChild(document.createElement('p')).textContent = 'Date Due:' + ' ' + format(date, 'PPPP');
        select.appendChild(document.createElement('p')).textContent = 'Be sure to complete ToDo task:' + ' ' + formatDistanceToNowStrict(date, { addSuffix: true}) + '!';
        select.appendChild(document.createElement('h3')).textContent = 'Discription expanded:';
        select.appendChild(document.createElement('p')).textContent = myToDos[key].discription;
        select.lastChild.className = 'discr';
        screenEvent.addFormListener('formDisc');
    }
};
export { display };