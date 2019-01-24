import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotelistEmpty from './notelist-empty.jsx';
import NotelistItem from './notelist-item.jsx';
import './notelist.css';


class Notelist extends Component {

    static propTypes = {
        notes: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            isActive: PropTypes.bool.isRequired,
            title: PropTypes.string.isRequired,
            lastEdited: PropTypes.string.isRequired,
        })),
        onSetActiveNote: PropTypes.func.isRequired,
    };

    get hasNotes() {
        const { notes } = this.props;
        return notes && notes.length > 0;
    }

    render() {
        const { notes, onSetActiveNote } = this.props;
        return (
            <div className="notelist">
                {!this.hasNotes
                    ? (<NotelistEmpty />)
                    : (
                        <ul className="notelist__list">
                            {this.hasNotes && notes.map(note => (
                                <NotelistItem
                                    key={note.id}
                                    onSetActiveNote={onSetActiveNote(note.id, note.isActive)}
                                    {...note}
                                />
                            ))}
                        </ul>
                    )
                }
            </div>
        )
    }
}

export default Notelist;
