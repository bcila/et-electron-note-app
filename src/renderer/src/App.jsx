import Versions from './components/Versions'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [modalIsOpen, setIsOpen] = useState(false)
  const [editingNote, setEditingNote] = useState(null)
  const [editedContent, setEditedContent] = useState('')

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

  const editNote = () => {
    if (editingNote && editedContent.trim() !== '') {
      window.api.editNote(editingNote.id, editedContent)
      fetchNotes()
      closeModal()
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addNote()
    }
  }

  function openModal(note) {
    setEditingNote(note)
    setEditedContent(note.note)
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
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
              <div className="controls">
                <button className="delete-btn" onClick={() => deleteNote(note.id)}>
                  Delete
                </button>
                <button className="edit-btn" onClick={() => openModal(note)}>
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Versions></Versions>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Note"
        className="Modal"
        // overlayClassName="Overlay"
        shouldCloseOnOverlayClick={true}
      >
        <h4>Edit Note</h4>
        <input
          type="text"
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
        <div className="controls-modal">
          <button onClick={editNote}>Save</button>
          <button onClick={closeModal}>X</button>
        </div>
      </Modal>
    </>
  )
}

export default App
