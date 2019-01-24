import { combineReducers } from 'redux';
import tabs from './tabs.js';
import notes from './notes.js';


export default combineReducers({
    tabs,
    notes,
});
