import React from 'react';
import PropTypes from 'prop-types';
import ControlsButton from './controls-button.jsx';
import './controls.css';


const Controls = ({ activeTabId, onAddNote, onDeleteNote }) => (
    <div className="controls">
        <ControlsButton
            text="Add note"
            onClick={onAddNote(activeTabId)}
        />
        <ControlsButton
            text="Delete note"
            onClick={onDeleteNote}
        />
    </div>
);

Controls.propTypes = {
    activeTabId: PropTypes.string.isRequired,
    onAddNote: PropTypes.func.isRequired,
    onDeleteNote: PropTypes.func.isRequired,
};

export default Controls;
