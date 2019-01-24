import { tabs as actionTypes } from './action-types.js';


export const setActiveTab = (id) => ({
    type: actionTypes.setActiveTab,
    id,
});
