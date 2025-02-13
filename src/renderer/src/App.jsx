import Versions from './components/Versions'
import { useEffect, useState } from 'react'

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  const fetchNotes = async () => {
    const savedNotes = await window.api.getNotes()
    savedNotes.reverse()
    setNotes(savedNotes)
  }

  const addNote = () => {
    if (newNote.trim() !== '') {
      window.api.saveNote(newNote)
      setNewNote('')
      fetchNotes()
    }
  }

  const deleteNote = (index) => {
    window.api.deleteNote(index)
    fetchNotes()
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addNote()
    }
  }

  return (
    <>
      <div className="add-note-container">
        <h1>✨ Eterna Notes ✨</h1>
        <div className="note-container">
          <input
            type="text"
            placeholder="Write your note here..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={addNote}>Add Note</button>
        </div>
      </div>

      {/* Listing the notes */}
      <div className="list-container">
        <ul className="note-list">
          {notes.map((note, index) => (
            <li key={index}>
              <p className="note-date">{note.date}</p>
              <span className="note-content">{note.note}</span>
              <button className="delete-btn" onClick={() => deleteNote(note.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
