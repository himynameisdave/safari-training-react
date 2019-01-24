import React from 'react';
import Tabs from './compounds/tabs/tabs.jsx';


const App = () => (
    <Tabs content={['Personal', 'Work', 'Other']}>
        <Tabs.Tab title="Personal" />
        <Tabs.Tab title="Work" />
        <Tabs.Tab title="Other" />
    </Tabs>
);

export default App;
