import dayjs from 'dayjs';
import { createSelector } from 'reselect';
import truncate from '../../utils/truncate.js';
import { getActiveTabId } from './tabs.js';

export const getNotes = state => state.notes;

export const getNotesList = createSelector(
    getNotes,
    notes => notes.map(note => ({
        id: note.id,
        isActive: note.isActive,
        title: truncate(note.content) || 'Untitled note',
        lastEdited: note.lastEdited,
        lastEditedRaw: note.lastEditedRaw,
        tabId: note.tabId,
    }))
);

export const getNotesSorted = createSelector(
    getNotesList,
    notes => notes.sort((note1, note2) => dayjs(note2.lastEditedRaw).diff(dayjs(note1.lastEditedRaw))),
);

export const getActiveNote = createSelector(
    getNotes,
    notes => notes.find(note => note.isActive) || null,
);

export const getActiveId = createSelector(
    getActiveNote,
    activeNote => activeNote ? activeNote.id : '',
);

export const getActiveContent = createSelector(
    getActiveNote,
    activeNote => activeNote ? activeNote.content : '',
);

export const getActiveLastEdited = createSelector(
    getActiveNote,
    activeNote => activeNote ? activeNote.lastEdited : '',
);

export const getNotesForActiveTab = createSelector(
    getActiveTabId,
    getNotesSorted,
    (activeTabId, notes) => notes.reduce((activeNotes, note) => {
        return note.tabId === activeTabId ? activeNotes.concat([note]) : activeNotes;
    }, []),
);
