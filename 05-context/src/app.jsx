import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './containers/controls.jsx';
import Notepad from './containers/notepad.jsx';
import Tabs from './containers/tabs.jsx';


class App extends Component {

    static propTypes = {
        activeTabId: PropTypes.string.isRequired,
    };

    render() {
        return (
            <Fragment>
                <div className="main__controls">
                    <Controls activeTabId={this.props.activeTabId} />
                </div>
                <div className="main__body">
                    <Tabs />
                    <Notepad />
                </div>
            </Fragment>
        );
    }
}

export default App;
