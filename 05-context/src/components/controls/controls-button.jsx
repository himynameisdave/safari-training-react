import React from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types';



const ControlsButton = ({ text, alignRight, onClick }) => (
    <button
        className={classnames('controls__button', { 'controls__button--right': alignRight })}
        onClick={onClick}
        aria-label={text}
    >
        {text}
    </button>
);

ControlsButton.propTypes = {
    alignRight: PropTypes.bool,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
ControlsButton.defaultProps = {
    alignRight: false,
}

export default ControlsButton;
