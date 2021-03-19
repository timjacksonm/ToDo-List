class ToDo {
  constructor(project, priority, checked, description, time) {
    this.project = project;
    this.priority = priority;
    this.checked = checked;
    this.description = description;
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

  setDescription(description) {
    this.description = description;
  }

  setTime(time) {
    this.time = time;
  }
}
export { ToDo };
