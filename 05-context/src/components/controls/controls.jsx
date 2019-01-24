import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ControlsButton from './controls-button.jsx';
import ThemeContext from '../../theme-context.js';
import './controls.css';


const Controls = ({ activeTabId, onAddNote, onDeleteNote }) => (
    <ThemeContext.Consumer>
        {({ theme, onToggleTheme }) => (
            <div className={classnames('controls', {
                'controls--theme-dark': theme === 'dark'
            })}>
                <ControlsButton
                    text="Add note"
                    onClick={onAddNote(activeTabId)}
                />
                <ControlsButton
                    text="Delete note"
                    onClick={onDeleteNote}
                />
                <ControlsButton
                    text="Switch theme"
                    onClick={onToggleTheme}
                    alignRight
                />
            </div>
        )}
    </ThemeContext.Consumer>
);

Controls.propTypes = {
    activeTabId: PropTypes.string.isRequired,
    onAddNote: PropTypes.func.isRequired,
    onDeleteNote: PropTypes.func.isRequired,
};

export default Controls;
