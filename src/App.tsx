import './App.css'
import { useKeycloak } from '@react-keycloak/web';
import SkeletonProgress from './components/SkeletonProgress'

import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const { keycloak, initialized } = useKeycloak();


  if (!initialized) return (<div><SkeletonProgress /></div>);
  if (!keycloak.authenticated) {
    keycloak.login();
    return null;
  }
  if (keycloak.authenticated && !keycloak.token) return <div>Authentication error. Please try again.</div>;

  return (
    <Routes>
      <Route path="/home" element={<Home keycloak={keycloak} />} />
      <Route path="/" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default App
