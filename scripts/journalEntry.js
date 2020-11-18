export const journalEntryComponent = (entry) => {
  return `
  
    <section id="entry--${entry.id}" class="journalEntry">
      <div>
        <p>${entry.date}</p>
        ${entry.content}
      </div>
    
    </section>
  
  `
}