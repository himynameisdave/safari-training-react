import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './notepad.css';


class Notepad extends Component {

    static propTypes = {
        activeTabId: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        lastEdited: PropTypes.string.isRequired,
        onAddNote: PropTypes.func.isRequired,
        onUpdateNoteContent: PropTypes.func.isRequired,
    };

    get activeNoteExists() {
        return !!this.props.id;
    }

    handleChange = (e) => {
        const { activeTabId, id, onAddNote, onUpdateNoteContent } = this.props;
        const content = e.target.value;
        if (!this.activeNoteExists) {
            return onAddNote(activeTabId, content);
        }
        return onUpdateNoteContent(id, content);
    }

    render() {
        const { content, lastEdited } = this.props;
        return (
            <div className="notepad">
                {lastEdited && (
                    <div className="notepad__last-edit">
                        {lastEdited}
                    </div>
                )}
                <textarea
                    className="notepad__content"
                    onChange={this.handleChange}
                    value={content}
                />
            </div>
        );
    }
};

export default Notepad;
