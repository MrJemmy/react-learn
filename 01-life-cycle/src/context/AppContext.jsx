import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children, value }) => {

    const [appValue, setAppValue] = useState(null);

    const contextValue = {
        appValue,
        setAppValue,
        ...value
    }


    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}
