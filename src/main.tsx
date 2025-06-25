import ReactDOM from 'react-dom/client';
import App from './App';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { createKeycloak } from './services/keycloak/keycloak';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from "react-router-dom";
import './index.css'

document.body.classList.add('dark');

const queryClient = new QueryClient()

const keycloak = createKeycloak();

const eventLogger = (event: string, error: unknown) => {
  if (event === 'onTokenExpired') {
    keycloak.updateToken(30);
  }
  if (event === 'onAuthLogout') {
    // Optionally redirect or show a message
    window.location.reload();
  }
  if (event === 'onAuthError') {
    console.error('Keycloak Auth Error:', error);
  }
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ReactKeycloakProvider authClient={keycloak} onEvent={eventLogger}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ReactKeycloakProvider>
  </BrowserRouter>
);
