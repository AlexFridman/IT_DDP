"use strict";

class Task {
    constructor(title, description, startDate, endDate, subtasks) {
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.subtasks = subtasks || new Array();
    }

    addSubtask(subtask) {
        this.subtasks.push(subtask)
    }
}

class RunningTask extends Task {
    constructor(title, description, startDate, endDate, subtasks, complete, done) {
        super(title, description, startDate, endDate, subtasks)
        this.complete = complete;
        this.done = done;
    }

    setDone(){
        this.done = true;
    }
}

var task = new RunningTask("My title", "descr", new Date(), new Date(), null, 78, false);
console.log(task.title);