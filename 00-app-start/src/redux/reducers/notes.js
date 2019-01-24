import {
    notes as actionTypes,
    tabs as tabsActionTypes
} from '../actions/action-types.js';
import createReducer from './create-reducer.js';
import markItemAsInactive from '../../utils/mark-item-as-inactive.js';

const initalState = [];

const actionsMap = {
    [actionTypes.addNote]: (state, { type, ...newNote }) => state
        .map(markItemAsInactive) // turn off the current active note
        .concat([newNote]),
    [actionTypes.deleteNote]: (state, action) => state.filter(note => !note.isActive),
    [actionTypes.updateNoteContent]: (state, action) => state.map(note => note.id !== action.id
        ? note
        : ({
            ...note,
            content: action.content,
            lastEdited: action.lastEdited.printed,
            lastEditedRaw: action.lastEdited.raw,
        })
    ),
    [actionTypes.setActiveNote]: (state, action) => state.map(note => ({
        ...note,
        isActive: note.id === action.id,
    })),
    [tabsActionTypes.setActiveTab]: (state) => state.map(markItemAsInactive),
};

export default createReducer(initalState, actionsMap);
