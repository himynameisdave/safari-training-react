import React, { Component } from 'react';
import uuid from 'uuid';
import Tab from './tabs-tab.jsx';
import TabsContent from './tabs-content.jsx';
import './tabs.css';


class Tabs extends Component {

    state = {
        tabs: [
            {
                id: uuid(),
                className: 'personal',
                title: 'Personal',
                isActive: false,
                content: (
                    <div className="tabs__content tabs__content--personal">
                        Personal stuff
                    </div>
                )
            },
            {
                id: uuid(),
                className: 'work',
                title: 'Work',
                isActive: true,
                content: (
                    <div className="tabs__content tabs__content--work">
                        Work stuff
                    </div>
                )
            },
            {
                id: uuid(),
                className: 'other',
                title: 'Other',
                isActive: false,
                content: (
                    <div className="tabs__content tabs__content--other">
                        Other stuff
                    </div>
                )
            },
        ]
    }

    get activeTab() {
        return this.state.tabs.find(tab => tab.isActive);
    }

    handleSetActiveTab = (tabIndex) => () => this.setState(({ tabs }) => ({
        tabs: tabs.map((tab, index) => ({
            ...tab,
            isActive: tabIndex === index,
        }))
    }));

    render() {
        return (
            <div className="tabs">
                <ul className="tabs__menu">
                    {this.state.tabs.map((tab, index) => (
                        <Tab
                            key={tab.title}
                            title={tab.title}
                            isActive={tab.id === this.activeTab.id}
                            onSetActiveTab={this.handleSetActiveTab(index)}
                        />
                    ))}
                </ul>
                <TabsContent
                    className={this.activeTab.className}
                    content={this.activeTab.content}
                />
            </div>
        );
    }
};


export default Tabs;
