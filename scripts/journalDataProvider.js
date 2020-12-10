
let journal = []

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



// export const useJournalEntries = () => {
//   const sortedByDate = journal.sort(
//       (currentEntry, nextEntry) =>
//           Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//   )
//   return sortedByDate
// }