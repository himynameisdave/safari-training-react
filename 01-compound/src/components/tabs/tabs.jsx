import React, { Component } from 'react';
import uuid from 'uuid';
import Tab from './tabs-tab.jsx';
import './tabs.css';


class Tabs extends Component {

    state = {
        tabs: [
            {
                id: uuid(),
                title: 'Personal',
                isActive: true,
            },
            {
                id: uuid(),
                title: 'Work',
                isActive: false,
            },
            {
                id: uuid(),
                title: 'Other',
                isActive: false,
            },
        ]
    }

    handleSetActiveTab = (tabId) => () => this.setState(({ tabs }) => ({
        tabs: tabs.map(tab => ({
            ...tab,
            isActive: tab.id === tabId,
        }))
    }));

    render() {
        return (
            <div className="tabs">
                <ul className="tabs__menu">
                    {this.state.tabs.map(tab => (
                        <Tab
                            key={tab.id}
                            title={tab.title}
                            isActive={tab.isActive}
                            onSetActiveTab={this.handleSetActiveTab(tab.id)}
                        />
                    ))}
                </ul>
            </div>
        );
    }
};


export default Tabs;
