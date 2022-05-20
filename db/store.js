const fs = require('fs');

const util = require('util');
const uuidv1 = require('uuid/v1')


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const uuidv1 = require('uuid/v1');

class Store {
    getNotes(){
        return readFileAsync('db/db.json', 'utf8').then(() => {
            let parsedNotes
            try {
                parsedNotes = [].concat(JSON.parse(notes))
            } catch (err){
                parsedNotes = [];
            }
        })
    }
    addnote(note) {
        const {tile, text} = note;

        if (!title || !text){
            throw new Error('Title and text are required');
        }

        const newNote = {title, text, id: uuidv1() };

        this.getNotes().then ((notes) => {
            notes.push(newNote);
        });
    }
}

modules.export = new Store()