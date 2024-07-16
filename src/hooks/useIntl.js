import { useContext } from 'react';
import { LanguageContext } from '../components/LanguageProvider/langContext';

export const useIntl = () => {
  const { switchLanguage, lang, messageMap } = useContext(LanguageContext);

  const formatMessage = ({ id, value = {} }) => {
    if (!messageMap?.[id]) {
      console.warn(` '${id}' Not configured internationalization`);
      return id;
    }
    
    let text = messageMap[id];

    Object.keys(value).forEach((key) => {
      text = text.replace(new RegExp(`{${key}}`, 'g'), value[key]);
    });

    return text;
  };

  return {
    switchLanguage,
    lang,
    formatMessage
  };
};
