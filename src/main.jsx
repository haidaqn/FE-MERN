import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Provider } from 'react-redux';
import { store, persistor } from './store/redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
//

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
);
