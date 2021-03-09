import { myProjects, myToDos } from './index';
import { format, isToday, isThisWeek, isThisMonth, parseISO } from 'date-fns'
class sort {
    static get todayList() {
        let listArray = [];
        for (let i = 0; i < myToDos.length; i++) {
            if(isToday(parseISO(myToDos[i].time))) {
                listArray.push(myToDos[i]);
            }  
        }
        console.log(listArray);
    }
    static get weekList() {
        let listArray = [];
        for (let i = 0; i < myToDos.length; i++) {
            if(isThisWeek(parseISO(myToDos[i].time))) {
                listArray.push(myToDos[i]);
            }  
        }
        console.log(listArray, 'week');
        
    }
    static get monthList() {
        let listArray = [];
        for (let i = 0; i < myToDos.length; i++) {
            if(isThisMonth(parseISO(myToDos[i].time))) {
                listArray.push(myToDos[i]);
            }  
        }
        console.log(listArray, 'month');
    }
}
export { sort };