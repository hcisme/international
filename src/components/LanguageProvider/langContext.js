import { createContext } from 'react';

export const LanguageContext = createContext({
  lang: '',
  messageMap: {},
  switchLanguage: () => {}
});
