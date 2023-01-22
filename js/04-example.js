// Example 4 - Notes

// Write a Notes class that manages the collection of notes in the items property. 
// A note is an object with text and priority properties.Add a static property Priority to the class, which will store the object with priorities.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Add methodsaddNote(note), removeNote(text) and updatePriority(text, newPriority).

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'My first note', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'My second note',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('My first note');
// console.log(myNotes.items);

// myNotes.updateNote('My second note', Notes.Priority.HIGH);
// console.log(myNotes.items);