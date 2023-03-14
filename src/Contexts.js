import React, { useState, useContext } from 'react';

const AppContext = React.createContext([]);

export const useTodos = () => {
    return useContext(AppContext)
}

const AppProvider = ({children}) => {
    const [todos, setTodos] = useState([])

    return (
        <AppContext.Provider value={[todos, setTodos]}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;
