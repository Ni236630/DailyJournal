import { getEntries,useJournalEntries } from "./journalDataProvider.js"
import { journalEntryComponent } from "./journalEntry.js"



// export const entryListComponent = () => {
//   //DOM reference to where all entries will be rendered
//   const entryLog = document.querySelector("#entryLog")
//   //Use the journal entry data from the data provider component
//   const entries = useJournalEntries()
  
  
//   for (const entry of entries){
//     const entryHTML = journalEntryComponent(entry)
    
//     entryLog.innerHTML += entryHTML
//   }
  
// }
const contentTarget = document.querySelector("#entryLog")

const render = (entryArray) => {
  const allEntriesToStrings = entryArray.map((entry) => journalEntryComponent(entry)).join("")
  
  contentTarget.innerHTML = allEntriesToStrings
}

export const noteList = () => {
  getEntries(
    .then(()=> {
      const allEntries = useJournalEntries()
      render(allEntries)
    })
  )
}