import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';

ReactDOM.render(
  <SpeechProvider appId='3678e0bc-bd15-4e94-976f-3c2af1f97fa1' language='en-US' >
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
  
);

