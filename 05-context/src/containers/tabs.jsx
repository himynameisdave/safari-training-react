import { connect } from 'react-redux';
import Tabs from '../components/tabs/tabs.jsx';
import { setActiveTab } from '../redux/actions/tabs.js';
import { getTabs, getActiveTabId } from '../redux/selectors/tabs.js';


const mapStateToProps = (state) => ({
    tabs: getTabs(state),
    activeTabId: getActiveTabId(state),
});

const mapDispatchToProps = (dispatch) => ({
    onSetActiveTab: (id) => () => dispatch(setActiveTab(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tabs);
