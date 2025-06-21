import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FavoritesProvider } from './context/FavoritesContext';
import { CompareProvider } from './context/CompareContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesProvider>
      <CompareProvider>
        <App />
      </CompareProvider>
    </FavoritesProvider>
  </StrictMode>,
)
