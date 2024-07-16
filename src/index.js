import React from 'react';
import ReactDOM from 'react-dom/client';
import LanguageProvider from './components/LanguageProvider';
import App from './App';
import './index.css';

if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', 'zh-cn');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
