import TabsContent from './components/tabs/tabs-content.jsx';
import WithTabs from './higher-order-components/with-tabs.jsx';

const tabs = [
    {
        title: 'Personal',
        content: 'Personal Notes',
    },
    {
        title: 'Work',
        content: 'Work Notes',
    },
    {
        title: 'Other',
        content: 'Other Notes',
    },
];

export default WithTabs(tabs)(TabsContent);
