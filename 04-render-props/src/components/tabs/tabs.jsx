import React, { Component } from 'react';
import Tab from './tabs-tab.jsx';
import TabsContent from './tabs-content.jsx';
import './tabs.css';


class Tabs extends Component {

    state = {
        activeTabIndex: 0,
    }

    get activeTabContent() {
        return this.props.tabs.find((tab, index) => index === this.state.activeTabIndex).content;
    }

    onSetActiveTabIndex = (activeTabIndex) => () => this.setState(() => ({ activeTabIndex }));

    render() {
        return (
            <div className="tabs">
                <ul className="tabs__menu">
                    {this.props.tabs.map((tab, index) => (
                        <Tab
                            key={tab.id}
                            title={tab.title}
                            isActive={index === this.state.activeTabIndex}
                            onSetActiveTab={this.onSetActiveTabIndex(index)}
                        />
                    ))}
                </ul>
                <TabsContent content={this.activeTabContent} />
            </div>
        );
    }
};


export default Tabs;
