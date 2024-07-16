import { useIntl } from '../hooks/useIntl';

const Content = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <h2>{formatMessage({ id: '内容' })}</h2>
      <br />
      <h2>{formatMessage({ id: '你好' })}</h2>
      <br />
      <h2>{formatMessage({ id: '这是数字 {num} {abc}', value: { num: 23, a: 123 } })}</h2>
      <br />
      <h2>{formatMessage({ id: '未配置国际化的文本' })}</h2>
    </>
  );
};

export default Content;
