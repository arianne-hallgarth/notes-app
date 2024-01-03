import React from 'react'
import './App.css'

function App() {
  return (
    <div className="AppContainer">
      <form className="NoteForm">
        <input placeholder="title" required />
        <textarea placeholder="content" required />
        <button type="submit">Add Note</button>
      </form>
      <div className="notes-grid">
        <div className="note-item">
          <div className="notes-header">
            <button>x</button>
          </div>
          <h2>Note Title</h2>
          <p>Note content</p>
        </div>
      </div>
    </div>
  )
}

export default App
