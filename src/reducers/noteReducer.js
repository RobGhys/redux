// Reducer state has to be composed of immutable objects
const noteReducer = (state = [], action) => {
    switch(action.type) {
        case 'NEW_NOTE':
            // destructure state and add action.data to it
            return [...state, action.data]
        case 'TOGGLE_IMPORTANCE':
            const id = action.data.id
            // search for a specific note object
            const noteToChange = state.find(n => n.id === id)

            // create a copy of the original note we just found
            // change its 'important' attribute
            const changedNote = {
                ...noteToChange,
                important: !noteToChange.important
            }

            // return a new state with all notes equal to the initial notes,
            // except for the changedNote
            return state.map(note =>
                note.id !== id ? note : changedNote
            )
        default:
            return state
    }
}

const generateId = () =>
    Number((Math.random() * 1000000).toFixed(0))

export const createNote = (content) => {
    return {
        type: 'NEW_NOTE',
        data: {
            content,
            important: false,
            id: generateId()
        }
    }
}

export const toggleImportanceOf = (id) => {
    return {
        type: 'TOGGLE_IMPORTANCE',
        data: { id }
    }
}

export default noteReducer