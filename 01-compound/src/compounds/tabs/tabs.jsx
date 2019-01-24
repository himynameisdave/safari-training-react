import React, { Children, Component } from 'react';
import Tab from './tabs-tab.jsx';
import Content from './tabs-content.jsx';
import './tabs.css';


class Tabs extends Component {

    static Tab = Tab;

    static Content = Content;

    state = {
        activeTabIndex: 0,
    }

    handleUpdateActiveTab = (tabIndex) => () => this.setState(() => ({
        activeTabIndex: tabIndex
    }));

    render() {
        const { activeTabIndex } = this.state;
        return (
            <div className="tabs">
                <ul className="tabs__menu">
                    {Children.map(this.props.children, (child, index) => {
                        return React.cloneElement(child, {
                            isActive: index === activeTabIndex,
                            onSetActiveTab: this.handleUpdateActiveTab(index),
                        });
                    })}
                </ul>
                <Tabs.Content>
                    {this.props.content[activeTabIndex]}
                </Tabs.Content>
            </div>
        );
    }
};


export default Tabs;
