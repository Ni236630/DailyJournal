export const journalEntryCreator = (entry) => {
  return `
  
    <section id="entry--${entry.id}" class="journalEntry">
      <div>
        <p>${entry.journalDate}</p>
       <div>Concepts discussed: ${entry.conceptsCovered}</div>
       <div>Mood for the day: ${entry.moods}</div>
       <p> ${entry.journalEntry}</p>
      </div>
    
    </section>
  
  `
}