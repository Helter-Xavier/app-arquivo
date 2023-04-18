import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from './contexts/auth';

// Imports das Paginas
import Home from './routes/Home/Home';
import NewAccount from './routes/NewAccout/NewAccount';
import Arquivos from './routes/Arquivos/Arquivos';
import Login from './routes/Login/Login';
import Folders from './routes/Folders/Folders'
import NewFolder from './routes/NewFolder/NewFolder'

const AppRoutes = () => {

    // Private pages
        const Private = ({children}) => {
            const { authenticated, loading } = useContext(AuthContext);

            // Se estiver no login, mostra carregando
            if(loading) {
                return <div className="loading">Carrgando...</div>
            }

            // Se não tiver authenticado não sai da dela de login
            if(!authenticated) {
                return <Navigate to="/login"/>
            }
            return children
        }

    return (
        // React router dom
        <BrowserRouter>
            <AuthProvider>
                <Routes>        
                    <Route exact path="/login" element={<Login />}/>
                    <Route exact path="/" element={<Private><Home/></Private>}/>
                    <Route exact path="/newAccount" element={<Private><NewAccount /></Private>}/>
                    <Route exact path="/arquivos" element={<Private><Arquivos /></Private>}/>         
                    <Route exact path="/pastas" element={<Private><Folders /></Private>}/>
                    <Route exact path="/NovoArquivo" element={<Private><NewFolder /></Private>}/>                          
                </Routes>
            </AuthProvider>
        </BrowserRouter>
        
    )
}

export default AppRoutes;