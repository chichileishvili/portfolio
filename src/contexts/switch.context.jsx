import { createContext, useState } from 'react';

export const SwitchContext = createContext({
    isThemeDark: false,
    setIsThemeDark: () => {},
});

export const SwitchProvider = ({ children }) => {
    const [isThemeDark, setIsThemeDark] = useState(false);
    const value = {
        isThemeDark,
        setIsThemeDark
    };
    return <SwitchContext.Provider value={value}>{children}</SwitchContext.Provider>
}