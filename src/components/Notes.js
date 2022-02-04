import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from '../reducers/noteReducer'

const Note = ({ note, handleClick }) => {
    return(
        <li onClick={handleClick}>
            {note.content}
            <strong> {note.important ? 'important' : ''}</strong>
        </li>
    )
}

const Notes = () => {
    // dispatch-function from the useDispatch -hook
    const dispatch = useDispatch()

    // component can access the notes stored in the store with the useSelector hook of the react redux library
    const notes = useSelector(({ filter, notes }) => {
        if (filter === 'ALL') {
            return notes
        }
        return filter === 'IMPORTANT'
            ? notes.filter(note => note.important)
            : notes.filter(note => ! note.important)
    })

    return(
        <ul>
            {notes.map(note =>
                <Note
                    key={note.id}
                    note={note}
                    handleClick={() =>
                        dispatch(toggleImportanceOf(note.id))
                    }
                />
            )}
        </ul>
    )
}

export default Notes