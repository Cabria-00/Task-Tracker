class Task {
  constructor(task, taskAssignment, shiftDate) {
    this.task = task;
    this.taskAssignment = taskAssignment || "Assigned task";
    this.shiftDate = shiftDate || new Date().toISOString().split("T")[0];
    // this.taskNotes = taskNotes;
    this.isCompleted = false;
    this.taskCreateDate = new Date().toISOString().split("T")[0];
    this.uniqueId = Date.now() + Math.random();
    this.isTracked = false;
  }

  // get taskName() {
  //   return this._taskName;
  // }

  // get shiftDate() {
  //   return this._targetDate;
  // }

  // get isCompleted() {
  //   return this._isCompleted;
  // }

  // set isCompleted(newStatus) {
  //   this._isCompleted = newStatus;
  // }
} // task class blueprint

export default Task;
