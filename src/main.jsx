import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ManageUser from './components/BaiTap/ManageUser.jsx';
import Timer from './components/BaiTap/Timer.jsx';
import CarouselCards from './components/BaiTap/CarouselCards.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ManageUser />
    <Timer />
    <CarouselCards />
  </React.StrictMode>,
);
