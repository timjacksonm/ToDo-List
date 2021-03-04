import { ToDo } from './todotask';
import { Project } from './project';
let myProjects = [];
let myToDos = [];
const todo1 = new ToDo('Chores','Red', 'yes', 'Cook Dinner', 'Time');
const todo2 = new ToDo('School','Orange', 'no', 'Feed Dog', 'Time');
const todo3 = new ToDo('Work','Green', 'no', 'Shovel Snow', 'Time');
myToDos.push(todo1, todo2, todo3);
console.log(myToDos);

class display {
    static get appendAllTodos() {
        const selectContainer = document.querySelector('#todoContainer');

        for (let i = 0; i < myToDos.length; i++) {
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
};
export { display };