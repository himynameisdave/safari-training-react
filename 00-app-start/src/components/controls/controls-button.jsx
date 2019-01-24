import React from 'react'
import PropTypes from 'prop-types';


const ControlsButton = ({ text, onClick }) => (
    <button
        className="controls__button"
        onClick={onClick}
        aria-label={text}
    >
        {text}
    </button>
);

ControlsButton.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ControlsButton;
