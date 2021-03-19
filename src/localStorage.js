import { sliderToggle, myProjects, myToDos } from './index';
class local {
  static get storeData() {
    const toggleSetting = sliderToggle.firstElementChild.checked;
    localStorage.setItem('lightdarkmode', JSON.stringify(toggleSetting));
    localStorage.setItem('myProjects', JSON.stringify(myProjects));
    localStorage.setItem('myToDos', JSON.stringify(myToDos));
  }

  static get getProjects() {
    return JSON.parse(localStorage.myProjects);
  }

  static get getTodos() {
    return JSON.parse(localStorage.myToDos);
  }

  static get getLightDark() {
    return JSON.parse(localStorage.lightdarkmode);
  }
}
export { local };
