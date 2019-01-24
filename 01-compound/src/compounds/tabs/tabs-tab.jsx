import React from 'react';
import classnames from 'classnames';


const Tab = ({ isActive, title, onSetActiveTab }) => (
    <li
        className={classnames('tabs__menu__tab', { 'tabs__menu__tab--active': isActive })}
        aria-label={title}
        role="button"
        onClick={onSetActiveTab}
    >
        {title}
    </li>
);

export default Tab;
