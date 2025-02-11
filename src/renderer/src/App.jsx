import Versions from './components/Versions'
import { useEffect, useState } from 'react'

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  const fetchNotes = async () => {
    const savedNotes = await window.api.getNotes()
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

  return (
    <>
      <h1>Eterna Note App Task</h1>
      <div className="note-container">
        <input
          type="text"
          placeholder="Add a note."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNote}>Save</button>
      </div>

      {/* Listing the notes */}
      <div
        className="list-container"
        style={{ padding: '10px', overflow: 'scroll', maxHeight: 600 }}
      >
        <ul className="note-list">
          {notes.map((note, index) => (
            <li key={index}>
              {note}
              <button className="delete-btn" onClick={() => deleteNote(index)}>
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
