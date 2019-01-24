import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Notelist from '../../containers/notelist.jsx';
import Tab from './tabs-tab.jsx';
import ThemeContext from '../../theme-context.js';
import './tabs.css';


const Tabs = ({ tabs, activeTabId, onSetActiveTab }) => (
    <ThemeContext.Consumer>
        {({ theme }) => (
            <div className={classnames('tabs', {
                'tabs--theme-dark': theme === 'dark',
            })}>
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
        )}
    </ThemeContext.Consumer>
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
