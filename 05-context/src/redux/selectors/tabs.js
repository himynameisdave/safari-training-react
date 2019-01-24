import { createSelector } from 'reselect';


export const getTabs = state => state.tabs;

export const getActiveTab = createSelector(
    getTabs,
    tabs => tabs.find(tab => tab.isActive),
);

export const getActiveTabId = createSelector(
    getActiveTab,
    activeTab => activeTab.id,
);
