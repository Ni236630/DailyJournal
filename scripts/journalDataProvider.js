/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
  {
      id: 1,
      date: "07/24/2025",
      concept: "HTML & CSS",
      content: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
      mood: "Ok"
    },
    {
      id: 2,
      date: "07/26/2025",
      concept: "HTML & CSS",
      content: "We talked about more CSS indepth.",
      mood: "Ok"
    },
    {
      id: 3,
      date: "07/27/2025",
      concept: "Javascript",
      content: "We discussed adding Javascript via <script> tag.",
      mood: "Ok"
  }
]

/*
  another function?
*/
export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
      (currentEntry, nextEntry) =>
          Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}