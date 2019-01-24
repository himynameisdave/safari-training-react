import { createContext } from 'react';



export default createContext({
    theme: 'light',
    onToggleTheme: () => null,
});
