//onst chalk= require('chalk');
const yargs= require('yargs');
const notes= require('./notes.js');

// customize yargs version

yargs.version('1.1.0');



//add
yargs.command({
    command: "add",
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe:"Note body",
            demandOption: true,
            type: 'string'
        }        
    },

    handler(argv){
        // console.log('Title: '+ argv.title)
        // console.log('Body: '+argv.body);
        notes.addNote(argv.title,argv.body);


    } 
})


//remove command

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
                }

    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

//list command

yargs.command({
    command: 'list',
    describe: 'lists your notes',
    handler() {
       notes.listNotes()
    }
})

//read command

yargs.command({
    command: 'read',
    describe:'read your notes',
    builder:{
        title:
        {
            describe:'Note title',
            demandOption:true,
            type: 'string'
    }
},
    handler(argv){
        notes.readnote(argv.title)
    }
    
})


yargs.parse();
