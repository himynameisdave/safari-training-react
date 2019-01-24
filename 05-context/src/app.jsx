import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './containers/controls.jsx';
import Notepad from './containers/notepad.jsx';
import Tabs from './containers/tabs.jsx';
import ThemeContext from './theme-context.js';

class App extends Component {

    static propTypes = {
        activeTabId: PropTypes.string.isRequired,
    };

    state = {
        theme: 'light'
    }

    onToggleTheme = () => this.setState(({ theme }) => ({
        theme: theme === 'light'
            ? 'dark'
            : 'light'
    }))

    render() {
        return (
            <ThemeContext.Provider value={{
                theme: this.state.theme,
                onToggleTheme: this.onToggleTheme
            }}>
                <div className="main__controls">
                    <Controls activeTabId={this.props.activeTabId} />
                </div>
                <div className="main__body">
                    <Tabs />
                    <Notepad />
                </div>
            </ThemeContext.Provider>
        );
    }
}

export default App;
