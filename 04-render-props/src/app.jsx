import React from 'react';
import uuid from 'uuid';
import Tabs from './components/tabs/tabs.jsx';
import './components/tabs/tabs.css';


const tabs = [
    {
        id: uuid(),
        title: 'Personal',
        content: 'Personal Notes',
    },
    {
        id: uuid(),
        title: 'Work',
        content: 'Work Notes',
    },
    {
        id: uuid(),
        title: 'Other',
        content: 'Other Notes',
    },
];

const App = () => (
    <Tabs tabs={tabs} />
);

export default App;
