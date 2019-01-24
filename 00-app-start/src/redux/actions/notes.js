import uuid from 'uuid';
import { notes as actionTypes } from './action-types.js';
import getLastEditedTime from '../../utils/get-last-edited-time.js';

const noteFactory = (tabId, initialContent = '') => {
    const { printed, raw } = getLastEditedTime();
    return {
        //  Generate uuid here in the action creato
        id: uuid(),
        content: initialContent,
        lastEdited: printed,
        lastEditedRaw: raw,
        isActive: true,
        tabId,
    };
};

export const addNote = (tabId, initialContent = '') => ({
    type: actionTypes.addNote,
    ...noteFactory(tabId, initialContent),
});

export const deleteNote = (id) => ({
    type: actionTypes.deleteNote,
    id
});

export const updateNoteContent = (id, content) => ({
    type: actionTypes.updateNoteContent,
    id,
    content,
    lastEdited: getLastEditedTime(),
});

export const setActiveNote = (id) => ({
    type: actionTypes.setActiveNote,
    id
});
