import dayjs from 'dayjs';

export default () => {
    const raw = dayjs();
    const dayEdited = raw.format('MMMM D, YYYY');
    const timeEdited = raw.format('h:mm A');
    return {
        raw,
        printed: `${dayEdited} at ${timeEdited}`,
    };
};
