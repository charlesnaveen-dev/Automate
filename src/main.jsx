import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles/global.css'
import './styles/components.css'
import App from './App.jsx'

const rootElement = document.getElementById('root');

if (rootElement) {
  if (rootElement.hasChildNodes()) {
    try {
      hydrateRoot(
        rootElement,
        <StrictMode>
          <App />
        </StrictMode>
      );
    } catch (e) {
      console.warn('Hydration fallback to client render:', e);
      createRoot(rootElement).render(
        <StrictMode>
          <App />
        </StrictMode>
      );
    }
  } else {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  }
}
