import ReactDOM from 'react-dom/client';

import { StrictMode, React } from 'react';
import App from './App';
import { worker } from './mocks/worker';

// if (process.env.NODE_ENV === 'development') {
worker.start();
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
