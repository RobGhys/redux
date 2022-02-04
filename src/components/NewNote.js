import React from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../reducers/noteReducer'

const NewNote = () => {
    // dispatch-function from the useDispatch -hook
    const dispatch = useDispatch()

    const addNote = (event) => {
        event.preventDefault()

        // get content of the new note from the form field
        const content = event.target.note.value
        event.target.note.value = ''

        // Call the creator function
        dispatch(createNote(content))
    }

    // input has name="note" so that we can get its value in the addNote function
    return (
        <form onSubmit={addNote}>
            <input name="note" />
            <button type="submit">add</button>
        </form>
    )
}

export default NewNote