import uuid from 'uuid';
import {
    tabs as actionTypes,
    notes as notesActionTypes
} from '../actions/action-types.js';
import createReducer from './create-reducer.js';


const tabFactory = (title = 'New tab', isActive = false) => ({
    id: uuid(),
    title,
    notes: [],
    isActive,
});

const initalState = [
    tabFactory('Personal', true),
    tabFactory('Work'),
    tabFactory('Other'),
];

const actionsMap = {
    [actionTypes.setActiveTab]: (state, action) => state.map(tab => ({
        ...tab,
        isActive: tab.id === action.id,
    })),
    [actionTypes.updateTabTitle]: (state, action) => state.map(tab => tab.id !== action.id
        ? tab
        : ({ ...tab, title: action.title })
    ),
    [notesActionTypes.addNote]: (state, { type, ...newNote }) => state.map(tab => tab.id !== newNote.tabId ? tab : ({
        ...tab,
        notes: [...tab.notes, newNote.id],
    })),
    [notesActionTypes.deleteNote]: (state, action) => state.map(tab => tab.id !== action.id ? tab : ({
        ...tab
    })),
};

export default createReducer(initalState, actionsMap);
