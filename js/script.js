class TaskManager {
  constructor(id, description) {
    this.taskManager = new Map();
    this.taskManager.set(id, description);
  }

  addTask(id, description) {
    if (this.taskManager.has(id)) throw new Error('This ID is already taken!');

    this.taskManager.set(id, description);
  }

  removeTask(id) {
    if (!this.taskManager.has(id)) throw new Error('ID is not found');

    this.taskManager.delete(id);
  }

  findTask(id) {
    const desc = this.taskManager.get(id);

    if (!desc) throw new Error('Description is not found');
    console.log(desc);
  }

  displayTasks() {
    this.taskManager.forEach((value, key) => {
      console.log(`ID: ${key}, Desc: ${value}`);
    });
  }

  updateTaskDescription(id, newDescription) {
    if (!this.taskManager.has(id)) throw new Error('ID is not found');

    this.taskManager.set(id, newDescription);
  }
}

const tm = new TaskManager(1, 'bla bla');
tm.addTask(2, 'aaaaa');
tm.addTask(3, 'Lorem ipsum');
tm.addTask(4, '1234567890');
tm.removeTask(1);
tm.findTask(2);
tm.displayTasks();
tm.updateTaskDescription(2, 'qwerty');
console.log(tm);
