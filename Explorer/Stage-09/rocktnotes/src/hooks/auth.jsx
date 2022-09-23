import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {
    
        try {
            const response = await api.post('/sessions', {  email, password });
            const { user, token } = response.data;
            
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token });
    
            localStorage.setItem('@rocketnotes:user', JSON.stringify(user));
            localStorage.setItem('@rocketnotes:token', token);
            
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert('Não foi possível se conectar')
            }
        }
    }

    function signOut() {
        localStorage.removeItem('@rocketnotes:token');
        localStorage.removeItem('@rocketnotes:user');

        setData({});
    }

    async function updateProfile({ user, avatarFile }) {
        try {
            
            if(avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append('avatar', avatarFile);

                const response = await api.patch('/user/avatar', fileUploadForm);
                user.avatar = response.data.avatar;
            }
            
            await api.put('/user', user);
            localStorage.setItem('@rocketnotes:user', JSON.stringify(user));

            setData({ user, token: data.token })
            alert('Deu boa!!')

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possível atualizar o perfil')
            }
        }
    }

    // UseEffect diz ao REACT oq precisa fazer apos uma renderização
    useEffect(() => {
        const token = localStorage.getItem('@rocketnotes:token');
        const user = localStorage.getItem('@rocketnotes:user');

        if(token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ 
                signIn,
                signOut,                
                updateProfile,
                user: data.user
                }} 
            >
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