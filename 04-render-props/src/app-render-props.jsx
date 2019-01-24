import React from 'react';
import Tabs from './render-props/tabs.jsx';
import Tab from './components/tabs/tabs-tab.jsx';
import TabContent from './components/tabs/tabs-content.jsx';
import './components/tabs/tabs.css';


const tabs = [
    {
        title: 'Personal',
        content: 'Personal Notes',
    },
    {
        title: 'Work',
        content: 'Work Notes',
    },
    {
        title: 'Other',
        content: 'Other Notes',
    },
];

const App = () => (
    <Tabs>
        {renderProps => (
            <div className="tabs">
                <ul className="tabs__menu">
                    {tabs.map((tab, index) => (
                        <Tab
                            key={tab.title}
                            title={tab.title}
                            isActive={index === renderProps.activeTabIndex}
                            onSetActiveTab={renderProps.onSetActiveTabIndex(index)}
                        />
                    ))}
                </ul>
                <TabContent
                    content={
                        tabs.find((tab, index) => index === renderProps.activeTabIndex).content
                    }
                />
            </div>
        )}
    </Tabs>
);

export default App;
