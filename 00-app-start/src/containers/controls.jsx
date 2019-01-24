import { connect } from 'react-redux';
import Controls from '../components/controls/controls.jsx';
import { addNote, deleteNote } from '../redux/actions/notes.js';


const mapDispatchToProps = (dispatch, { activeTabId }) => ({
    onAddNote: (activeTabId) => () => dispatch(addNote(activeTabId)),
    onDeleteNote: (id) => dispatch(deleteNote(id)),
});

export default connect(
    null,
    mapDispatchToProps,
)(Controls);
