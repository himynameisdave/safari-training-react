import React from 'react';
import PropTypes from 'prop-types';
import Notelist from '../../containers/notelist.jsx';
import Tab from './tabs-tab.jsx';
import './tabs.css';


const Tabs = ({ tabs, activeTabId, onSetActiveTab }) => (
    <div className="tabs">
        <ul className="tabs__menu">
            {tabs.map(tab => (
                <Tab
                    key={tab.id}
                    {...tab}
                    onSetActiveTab={onSetActiveTab(tab.id)}
                />
            ))}
        </ul>
        <Notelist activeTabId={activeTabId} />
    </div>
);

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        isActive: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
    onSetActiveTab: PropTypes.func.isRequired,
};

export default Tabs;
