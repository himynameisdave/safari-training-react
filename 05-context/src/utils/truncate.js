//  For truncating note content to be displayed in the notelist

export default (content, length = 50) => `${content.substr(0, length)}${content.length > length ? '...' : ''}`;
