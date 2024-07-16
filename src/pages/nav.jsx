import { useIntl } from '../hooks/useIntl';

const Nav = () => {
  const { switchLanguage, lang } = useIntl();
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'center',
        width: '100%',
        padding: 8
      }}
    >
      <button
        onClick={() => {
          switchLanguage(lang === 'zh-cn' ? 'en-us' : 'zh-cn');
        }}
      >
        {lang === 'zh-cn' ? 'zh-cn' : 'en-us'}
      </button>
    </div>
  );
};

export default Nav;
