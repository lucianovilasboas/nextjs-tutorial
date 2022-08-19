const fs = require('fs');

const fileName = 'data/democracia.json';

let democracia = JSON.parse(fs.readFileSync(fileName));

export const demRepo = {
    getAll: () => democracia,
    find: x => democracia.find(x),
    getById,
    findLast,
    create,
    update,
    delete: _delete
};


function getById(id){
    return democracia.find(x => x.id.toString() === id.toString())
};

function findLast(){
    let lastId = Math.max(...democracia.map(x => x.id));
    return getById(lastId);
};

function create(dem) {
    // generate new task id
    dem.id = democracia.length ? Math.max(...democracia.map(x => x.id)) + 1 : 1;

    // set date created and updated
    dem.dateCreated = new Date().toISOString();
    dem.dateUpdated = new Date().toISOString();

    // add and save task
    democracia.push(dem);
    saveData();
    
    return dem.id;
};

function update(id, params) {
    const dem = democracia.find(x => x.id.toString() === id.toString());

    // set date updated
    dem.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(dem, params);
    saveData();
};

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted task and save
    dems = democracia.filter(x => x.id.toString() !== id.toString());
    saveData();
};

// private helper functions

function saveData() {
    fs.writeFileSync(fileName, JSON.stringify(democracia, null, 4));
};