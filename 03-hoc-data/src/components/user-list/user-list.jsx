import React from 'react';
import WithData from '../../higher-order-components/with-data.jsx';
import './user-list.css';


const UserList = ({ data, error }) => error
    ? (
        <div className="user-list__error">
            <span role="img" aria-label="error">😢</span> Uh oh, something went wrong!
        </div>
    )
    : (
        <ul className="user-list">
            {data.users && data.users.map(user => (
                <li
                    key={user.guid}
                    className="user-list__item"
                >
                    <div className="user-list__item__name">
                        {user.name}
                    </div>
                    <div className="user-list__item__email">
                        {user.email}
                    </div>
                    <div className="user-list__item__phone">
                        {user.phone}
                    </div>
                    <div className="user-list__item__address">
                        {user.address}
                    </div>
                </li>
            ))}
        </ul>
    );

export default WithData(UserList);
