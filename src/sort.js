import { myToDos } from './index';
import { isToday, isThisWeek, isThisMonth, parseISO } from 'date-fns'

class sort {
    static get todayList() {
        let myToDosSorted = [];
        for (let i = 0; i < myToDos.length; i++) {
            if(isToday(parseISO(myToDos[i].time))) {
                myToDosSorted.push(myToDos[i]);
            }  
        }
        return myToDosSorted;
    }
    static get weekList() {
        let myToDosSorted = [];
        for (let i = 0; i < myToDos.length; i++) {
            if(isThisWeek(parseISO(myToDos[i].time))) {
                myToDosSorted.push(myToDos[i]);
            }  
        }
        return myToDosSorted;
    }
    static get monthList() {
        let myToDosSorted = [];
        for (let i = 0; i < myToDos.length; i++) {
            if(isThisMonth(parseISO(myToDos[i].time))) {
                myToDosSorted.push(myToDos[i]);
            }  
        }
        return myToDosSorted;
    }
}
export { sort };