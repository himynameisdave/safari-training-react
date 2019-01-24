import React from 'react'


const TabsContent = ({ content, className }) => (
    <div className={`tabs__content tabs__content--${className}`}>
        {content}
    </div>
);

export default TabsContent;
