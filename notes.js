const fs = require('fs');
const chalk= require('chalk');
const addNote= function(title,body)
{
      const notes= loadNotes();
      const dupNotes = notes.filter((note)=> note.title===title)  //filter property takes in a single object at a time and checks it's title property 
                                                        //returns an array of duplicate titles
                                                         //returns true or false
     
     const dupNote= notes.find((note)=>note.title===title)

     
     

      if(!dupNote)//===if(dupeNote===undefined)
      {
          notes.push({
               title: title,
               body: body
          })
          
    saveNotes(notes);
    console.log("New note added");
      }else{
           console.log("Duplicate title!")
      }

      
}

const removeNotes= function(title){
     const notes= loadNotes();
     const notestokeep= notes.filter((note)=>note.title!==title)

     if(notestokeep.length===notes.length)
     {
          console.log(chalk.red.inverse("No note removed"));
     }else{
          console.log(chalk.green.inverse("Note removed!"))
     }
     saveNotes(notestokeep);
     
}

const saveNotes= (notes)=>{
     const dataJSON= JSON.stringify(notes);
     fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes= ()=>{
     try{
          const dataBuffer = fs.readFileSync('notes.json')
          const dataJson = dataBuffer.toString();
          return JSON.parse(dataJson); 
     }catch(e){
          return []
     }
}

    


const listNotes=()=>{
     const notes=loadNotes()
     console.log(chalk.blue.inverse("Your Notes!"))
     notes.forEach((note)=>console.log(note.title))
    
}

const readnote=(title)=>{
     const notes=loadNotes()
     const note = notes.find((note)=>note.title===title)

     if(note)
     {
          console.log(chalk.inverse(note.title))
          console.log(note.body)
     }
     else
     {
          console.log(chalk.red.inverse("Note not found"))
     }
}


module.exports = {
     /*getNotes: getNotes,*/
     addNote: addNote,
     removeNotes: removeNotes,
     listNotes:listNotes,
     readnote: readnote
}; 