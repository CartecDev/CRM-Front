import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/router/PrivateRoute';
import PublicRoute from './components/router/PublicRoute';
import {CLIENTES, NUEVO_CLIENTE, VER_CLIENTE, MODIFICAR_CLIENTE, CONSULTAS, NUEVA_CONSULTA, CALENDARIO, DASHBOARD, LOGIN, VER_PERFIL, LOGOUT, EMAIL, ENVIAR_MAIL, SEGUIMIENTO_CONSULTA } from './config/router/paths';
import AuthContextProvider from './contexts/authContext';

import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import Clientes from './pages/Clientes';
import Consultas from './pages/Consultas';
import Calendario from './pages/Calendario';
import NewCliente from './pages/NewCliente';
import NewConsulta from './pages/NewConsulta';
import VerCliente from './pages/VerCliente';
import ModificarCliente from './pages/ModificarCliente';
import VerPerfil from './pages/VerPerfil';
import EmailClient from './pages/MailInbox';
import EnviarMail from './pages/EnviarMail';
import SeguimientoConsulta from './pages/SeguimientoConsulta';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Routes>
          {/* PRIVATE */}
          <Route path={DASHBOARD} element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            <Route path={LOGOUT} element={<Logout />} />
            <Route path={CLIENTES} element={<Clientes />} />
            <Route path={NUEVO_CLIENTE} element={<NewCliente />} />
            <Route path={VER_CLIENTE} element={<VerCliente />} />
            <Route path={MODIFICAR_CLIENTE} element={<ModificarCliente />} />
            <Route path={CONSULTAS} element={<Consultas />} />
            <Route path={NUEVA_CONSULTA} element={<NewConsulta />} />
            <Route path={SEGUIMIENTO_CONSULTA} element={<SeguimientoConsulta />} />
            <Route path={CALENDARIO} element={<Calendario />} />
            <Route path={VER_PERFIL} element={<VerPerfil />} />
            <Route path={EMAIL} element={<EmailClient />} />
            <Route path={ENVIAR_MAIL} element={<EnviarMail />} />
          </Route>
          
          {/* PUBLIC */}
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path={LOGIN} element={<Login />} />
          </Route>
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;