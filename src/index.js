import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { DatePicker } from '@material-ui/pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { BrowserRouter } from 'react-router-dom';

// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <DatePicker dateAdapter={AdapterDateFns}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </DatePicker > */}
  </React.StrictMode >
);