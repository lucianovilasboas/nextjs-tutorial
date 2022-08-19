const fs = require('fs');

const fileName = 'data/tasks.json';

// tasks in JSON file for simplicity, store in a db for production applications
let tasks = JSON.parse(fs.readFileSync(fileName));

export const tasksRepo = {
    getAll: () => tasks,
    getById: id => tasks.find(x => x.id.toString() === id.toString()),
    find: x => tasks.find(x),
    create,
    update,
    delete: _delete
};

function create(task) {
    // generate new task id
    task.id = tasks.length ? Math.max(...tasks.map(x => x.id)) + 1 : 1;

    // set date created and updated
    task.dateCreated = new Date().toISOString();
    task.dateUpdated = new Date().toISOString();

    // add and save task
    tasks.push(task);
    saveData();
    
    return task.id;
}

function update(id, params) {
    const task = tasks.find(x => x.id.toString() === id.toString());

    // set date updated
    task.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(task, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted task and save
    tasks = tasks.filter(x => x.id.toString() !== id.toString());
    saveData();
    
}

// private helper functions

function saveData() {
    fs.writeFileSync(fileName, JSON.stringify(tasks, null, 4));
}