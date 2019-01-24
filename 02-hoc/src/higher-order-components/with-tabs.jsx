import React, { Component } from 'react';
import Tab from '../components/tabs/tabs-tab.jsx';
import '../components/tabs/tabs.css';


const WithTabs = (tabs = []) => (ContentComponent, renderContentOnTop) => {
    return class extends Component {

        state = {
            //  Make the first tab active
            tabs: tabs.map((tab, index) => ({
                ...tab,
                isActive: index === 0
            })),
        }

        getActiveTab() {
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
                    {renderContentOnTop && (
                        <ContentComponent
                            {...this.getActiveTab()}
                        />
                    )}
                    <ul className="tabs__menu">
                        {this.state.tabs.map((tab, index) => (
                            <Tab
                                key={tab.title}
                                title={tab.title}
                                isActive={tab.isActive}
                                onSetActiveTab={this.handleSetActiveTab(index)}
                            />
                        ))}
                    </ul>
                    {!renderContentOnTop && (
                        <ContentComponent
                            {...this.getActiveTab()}
                        />
                    )}
                </div>
            );
        }
    }
}


export default WithTabs;
