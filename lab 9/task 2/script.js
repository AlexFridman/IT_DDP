"use strict";

var Task = function Task(title, description, startDate, endDate, subtasks) {
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.subtasks = subtasks || new Array();
}

Task.prototype = {
    title: null,
    description: null,
    startDate: null,
    endDate: null,
    subtasks: null,
    addSubtask: function (subtask) {
        this.subtasks.push(subtask)
    }

}


function RunningTask(title, description, startDate, endDate, subtasks, complete, done) {
    Task.call(this, title, description, startDate, endDate, subtasks);

    this.complete = complete;
    this.done = done;
}

RunningTask.prototype = Object.create(Task.prototype, {
    complete: {
        value: null,
        enumerable: true,
        configurable: true,
        writable: true
    },
    done: {
        value: null,
        enumerable: true,
        configurable: true,
        writable: true
    }
});
RunningTask.prototype.constructor = RunningTask;

var task = new RunningTask("My title", "descr", new Date(), new Date(), null, 78, false);
task.addSubtask(new Task("My title", "descr", new Date(), new Date(), null))
alert(task.title);
