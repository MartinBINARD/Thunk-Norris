import React from 'react';
import ReactDOM from 'react-dom/client';

import Widget from 'src/components/Widget';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Widget />
  </React.StrictMode>
);
