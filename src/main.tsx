import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import logo from './logo.png';

const iconLink = document.querySelector("link[rel~='icon']") ?? document.createElement('link');
iconLink.setAttribute('rel', 'icon');
iconLink.setAttribute('type', 'image/png');
iconLink.setAttribute('href', logo);

if (!iconLink.parentElement) {
  document.head.appendChild(iconLink);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
