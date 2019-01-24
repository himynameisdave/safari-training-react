import { Component } from 'react';
import PropTypes from 'prop-types';


class Tabs extends Component {

    static propTypes = {
        children: PropTypes.func.isRequired
    }

    state = {
        activeTabIndex: 0,
    }

    get renderProps() {
        return {
            ...this.state,
            onSetActiveTabIndex: this.setActiveTabIndex,
        };
    }

    setActiveTabIndex = (activeTabIndex) => () => this.setState(() => ({ activeTabIndex }));

    render() {
        return this.props.children(this.renderProps);
    }
};


export default Tabs;
