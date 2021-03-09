class ToDo {
    constructor(project,priority, checked, discription, time) {
        this.project = project;
        this.priority = priority;
        this.checked = checked;
        this.discription = discription;
        this.time = time;
    }
    setProject(project) {
        this.project = project;
    }
    setPriority(priority) {
      this.priority = priority;
    }
    setChecked(checked) {
       this.checked = checked;
    }
    setDiscription(discription) {
       this.discription = discription;
    }
    setTime(time) {
        this.time = time;
    }
}
export { ToDo };