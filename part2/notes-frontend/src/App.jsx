import { useState, useEffect } from 'react';
import Note from './components/Note';
import noteService from './services/notes'

const App = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState(
        'a new note...'
    );
    const [showAll, setShowAll] = useState(true);

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important);

    const toggleImportanceOf = id => {
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }

        noteService.update(id, changedNote).
            then(updatedNote => {
                setNotes(notes.map(n => n.id !== id ? n : updatedNote))
            }).catch(error => {
                console.log(error);
                alert(
                    `the note '${note.content}' was already deleted from server`
                )
                setNotes(notes.filter(n => n.id !== id))
            })

    }

    const handleNoteChange = (event) => {
        setNewNote(event.target.value)
    }

    const addNote = (event) => {
        event.preventDefault()

        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5,
            id: String(notes.length + 1),
        };

        noteService.create(noteObject).
            then(createdNote => {
                setNotes(notes.concat(createdNote))
                setNewNote('')
            });

    }

    useEffect(() => {
        noteService.getAll().
            then(initialNotes => {
                setNotes(initialNotes);
            })
    }, [])




    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {notesToShow.map(note =>
                    <Note
                        key={note.id}
                        note={note}
                        toggleImportance={() => toggleImportanceOf(note.id)}
                    />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange} />
                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default App