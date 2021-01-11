import "./journalForm.js"
let journal = []
/* 

State change

*/

const dispatchStateChangeEvent = () => {
  eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}


/*

Saving entries

*/

export const saveJournalEntry = (newJournalEntry) => {
  fetch ("http://localhost:8088/entries",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
  })
  .then(getEntries)
  .then(dispatchStateChangeEvent)
}

/*

Grab entries from Json and store them

*/



export const getEntries = () => {
  return fetch("http://localhost:8088/entries") 
      .then(response => response.json())  
      .then(entries => {
          journal = entries
      })
}


export const useJournalEntries = () => {
  return journal.slice()
}


