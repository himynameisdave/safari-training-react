import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Controls from './containers/controls.jsx';
import Notepad from './containers/notepad.jsx';
import Tabs from './containers/tabs.jsx';


const App = ({ activeTabId }) => (
    <Fragment>
        <div className="main__controls">
            <Controls activeTabId={activeTabId} />
        </div>
        <div className="main__body">
            <Tabs />
            <Notepad />
        </div>
    </Fragment>
);

App.propTypes = {
    activeTabId: PropTypes.string.isRequired,
};

export default App;
