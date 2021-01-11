import { saveJournalEntry } from "./journalDataProvider.js";


const eventHub = document.querySelector("#container")


/*
  Listener to save notes
*/


eventHub.addEventListener("click", (clickEvent)=> {
  if (clickEvent.target.id === "saveEntry"){
    const journalDate = document.querySelector("#journalDate").value
    const conceptsCovered = document.querySelector("#conceptsCovered").value 
    const journalEntry = document.querySelector("#journalEntry").value
    const moods = document.querySelector("#moods").value
    
    
    //Creates new object which contains journal entry
    
    const newEntry = {
      journalDate, 
      conceptsCovered,
      journalEntry,
      moods
    }
    
    saveJournalEntry(newEntry)
 
    
  }
})
