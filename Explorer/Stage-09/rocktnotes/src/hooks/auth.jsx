import { createContext, useContext } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{ email: 'matheusviscki@gmail.com' }} >
            {children}
        </AuthContext.Provider>
    )
}

// criando um hook
function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };