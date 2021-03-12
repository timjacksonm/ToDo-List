import { display } from './display';
import { ToDo } from './todotask';
import { forms } from './forms';
import { myProjects, myToDos } from './index';
let projectSelected = '';
let sortSelected = '';
const projectContainer = document.querySelector('#projContainer');
const sortContainer = document.querySelector('#sortContainer');
const todoContainer = document.querySelector('#todoContainer');

class screenEvent {
    static get addProjectListeners() {
        //evetnListeners for each named project - when clicked appends to page based on sort selection.
        for (let i = 0; i < myProjects.length; i++) {
            projectContainer.children[i].addEventListener('click', (e)=>{
                if(e.target.tagName == 'INPUT') {
                    this.checkNavSelections;
                    display.appendAllTodos(myProjects[i], sortSelected);
                }
            });
        }
        //eventListener for submitting new project
        projectContainer.addEventListener('submit', (e)=>{
            e.preventDefault();
            if(e.target.firstChild.value !== '') {
                myProjects.push(e.target.firstChild.value);
                display.appendAllProjects;
                this.addProjectListeners;
                addProject.disabled = false;
            }else  {
                e.target.firstChild.required = true;
                document.querySelector("#newProjForm > input[type=text]").style.outlineColor = 'red';
            }
        });
        //eventListener for deleting a project.
        const deleteButton = document.querySelectorAll('.projDelete');
        //When delete button is clicked. updates myToDos Array - updates myProjects Array - updates DOM
        deleteButton.forEach(button => {
            button.addEventListener('click', (e)=>{
                if(e.target.className == 'fa fa-trash') {
                    let projIndex = e.target.parentNode.id.charAt(0);
                    const choice = confirm('Delete' + ' ' + `"${myProjects[projIndex]}"?` + ' ' + 'Confirm will delete this project and all todo/s assigned to it.');
                    if(choice == true) {
                        let todoIndex = 0;
                        let currentLength = myToDos.length;
                        for (let i = 0; i < currentLength; i++) {
                            if(myToDos[todoIndex].project == myProjects[projIndex]) { 
                                myToDos.splice(todoIndex, 1);
                            }else {
                                todoIndex++;
                            }
                        }
                        myProjects.splice(projIndex, 1);
                        display.appendAllProjects;
                        screenEvent.addProjectListeners;
                        projectContainer.querySelector('input').checked = 'checked';
                        screenEvent.checkNavSelections;
                        display.appendAllTodos(projectSelected, sortSelected);
                    }
                }
            })
        });
    }
    static get addSortListeners() {
        for (let i = 0; i < sortContainer.children.length; i++) {
            sortContainer.children[i].addEventListener('click', (e)=>{
                if(e.target.tagName == 'INPUT') {
                    this.checkNavSelections;
                    display.appendAllTodos(projectSelected, sortSelected);
                }
            });
        } 
    }
    static get addTodoListeners() {
        const checkBoxs = todoContainer.querySelectorAll('input');
        const discrButton = todoContainer.querySelectorAll('.labelDisc');
        const modifyButton = document.querySelectorAll('.modify');
        const deleteButton = document.querySelectorAll('.delete');
//When checkBox is checked - updates myToDos Array - updates DOM
        checkBoxs.forEach(input => {
            input.addEventListener('change', (e)=>{
                let key = e.target.id;
                myToDos[key].setChecked(e.target.checked);
            })
        });
//When the discription of a todo is clicked. Opens window displaying more information.
        discrButton.forEach(disc => {
            disc.addEventListener('click', (e)=>{
                let key = e.target.parentNode.querySelector('input').id;
                display.discription(key);
            });
        });
//When modify button is clicked. Opens window allowing changes to the current ToDo.
        modifyButton.forEach(button => {button.addEventListener('click', (e)=>{
            forms.todoForm('modify', e);
        })
    });
//When delete button is clicked. updates myToDos Array - updates DOM
        deleteButton.forEach(button => {
            button.addEventListener('click', (e)=>{
                let key = '';
                if(e.target.className == 'fa fa-trash') {
                   //do nothing, just an icon - fire if button.
                }else {
                    console.log(e.target);
                    key = e.target.id.charAt(0);
                    myToDos.splice(key, 1);
                    this.checkNavSelections
                    display.appendAllTodos(projectSelected, sortSelected);
                }
        })
    });
    }
    static addFormListener(status, key) {
        const formSelect = document.querySelector('.formContainer').firstChild;
        formSelect.querySelector('.closebtn').addEventListener('click', ()=>{forms.closeToDoForm});
        switch (status) {
            case 'new':
                formSelect.querySelector('#Submit').addEventListener('click', (e)=>{
                    e.preventDefault();
                    let completed = this.getToDoFormData('new', 'none');
                    if(completed == true) {
                        forms.closeToDoForm;
                        this.checkNavSelections;
                        display.appendAllTodos(projectSelected, sortSelected);
                    }
                });
                break;
            case 'modify':
                formSelect.querySelector('#Submit').addEventListener('click', (e)=>{
                    e.preventDefault();
                    let completed = this.getToDoFormData('modify', key);
                    if(completed == true) {
                        forms.closeToDoForm;
                        this.checkNavSelections;
                        display.appendAllTodos(projectSelected, sortSelected);
                    }
                });
                break;
            default:
                break;
        }
    }
    static getToDoFormData(formstatus, key) {
        let completed = forms.validation('new');      
        if(formstatus == 'new') {
            if(completed == true) {
                const formSelect = document.querySelector('.todoForm');
                myToDos.push(new ToDo(`${formSelect.querySelector('#projectChoice').value}`, `${formSelect.querySelector('#priorityChoice').value}`, 'no', `${formSelect.querySelector('textarea').value}`, `${formSelect.querySelector('input').value}`));
                return true;
            }else {
                return false;
            }
        }else {
            if(completed == true) {
                const formSelect = document.querySelector('.todoForm');
                myToDos[key].setProject(formSelect.querySelector('#projectChoice').value);
                myToDos[key].setPriority(formSelect.querySelector('#priorityChoice').value); 
                myToDos[key].setDiscription(formSelect.querySelector('textarea').value);
                myToDos[key].setTime(formSelect.querySelector('input').value);
                return true;
            }else {
                return false;
            }
        }
    }
    static get checkNavSelections() {
        document.querySelector('#projContainer').querySelectorAll('label').forEach(label => {
             if (label.querySelector('input').checked == true) {
                 projectSelected = label.lastElementChild.textContent
                }
            })
        document.querySelector('#sortContainer').querySelectorAll('label').forEach(label => {
            if (label.querySelector('input').checked == true) {
                sortSelected = label.lastElementChild.textContent
            }
        })
    }
}
export { screenEvent, projectSelected, sortSelected };