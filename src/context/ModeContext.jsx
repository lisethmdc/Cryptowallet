import React, { useState, useEffect, useContext} from 'react';

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

export const useTheme = () => {
    return useContext(ThemeContext)
};

export const useUpdateTheme = () => {
    return useContext(ThemeUpdateContext)
};

export default function ModeContext({ children }) {
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        document.body.style.backgroundColor = darkTheme ? '#161a1d' : '#f8f9fa'
    }, [darkTheme])

    const toggleTheme = () => {
        setDarkTheme (prevDarkTheme => !prevDarkTheme)
    }

    return (
        <div>
            <ThemeContext.Provider value={darkTheme}>
                <ThemeUpdateContext.Provider value={toggleTheme}>
                    {children}
                </ThemeUpdateContext.Provider>
            </ThemeContext.Provider>

        </div>
    )
}
