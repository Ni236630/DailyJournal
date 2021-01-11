import { getEntries,useJournalEntries } from "./journalDataProvider.js"
import { journalEntryCreator } from "./journalEntry.js"


const contentTarget = document.querySelector("#entryLog")

/*

Render entry list to the DOM

*/

const render = (entryArray) => {
  const allEntriesToStrings = entryArray.map(entry => journalEntryCreator(entry)).join("")
  
  contentTarget.innerHTML = allEntriesToStrings
}


export const noteList = () => {
  getEntries()
    .then(()=> {
      const allEntries = useJournalEntries()
      render(allEntries)
    })
  }