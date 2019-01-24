import { connect } from 'react-redux';
import Notepad from '../components/notepad/notepad.jsx';
import { addNote, updateNoteContent } from '../redux/actions/notes.js';
import { getActiveId, getActiveContent, getActiveLastEdited } from '../redux/selectors/notes.js';
import { getActiveTabId } from '../redux/selectors/tabs.js';


const mapStateToProps = (state) => ({
    id: getActiveId(state),
    content: getActiveContent(state),
    lastEdited: getActiveLastEdited(state),
    activeTabId: getActiveTabId(state)
});

const mapDispatchToProps = (dispatch) => ({
    onAddNote: (tabId, initalContent) => dispatch(addNote(tabId, initalContent)),
    onUpdateNoteContent: (id, content) => dispatch(updateNoteContent(id, content)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Notepad);
