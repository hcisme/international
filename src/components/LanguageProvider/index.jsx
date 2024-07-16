import React, { useState } from 'react';
import { LanguageContext } from './langContext';
import zhcn from '../../locale/zh-ch';
import enus from '../../locale/en-us';

export const langMap = { 'en-us': enus, 'zh-cn': zhcn };

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('lang'));

  const switchLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <LanguageContext.Provider value={{ lang: language, messageMap: langMap[language], switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
