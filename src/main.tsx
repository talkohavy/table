import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import DarkThemeProvider from './providers/DarkThemeProvider';
// Static styles must be imported in the main entry, and NOT from some bootstrap file, to ensure they are included in the build:
import './common/bootstrap';
import './common/styles/dark-mode-table.css'; // Import dark-mode CSS directly here
import './lib/syntaxHighlighter/styles/1c-light.css';
import './lib/syntaxHighlighter/styles/vscode-dark.css';
import './index.css';

function Client() {
  return (
    <StrictMode>
      <BrowserRouter>
        <DarkThemeProvider>
          <App />
        </DarkThemeProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

const rootElement = document.getElementById('root')!;

createRoot(rootElement).render(<Client />);
