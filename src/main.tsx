import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import { store } from '@/app/model/state';

import './styles/index.css';
import { HashRouter } from 'react-router';
import App from './app/App';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <HashRouter basename="/">
                <App />
            </HashRouter>
        </Provider>
    </StrictMode>,
);
