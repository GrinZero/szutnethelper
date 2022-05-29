import { useEffect } from 'react';
import styles from './Main.module.scss';

const Main = () => {
  useEffect(() => {
    const main = async () => {
      const postResponse = await window.bridge.SztuStudent.login({
        username: '201906010227',
        password: '517520',
      });
      if (postResponse.code !== 1) {
        console.error('Login SztuStudent Failed');
        return;
      }
      console.info('Login SztuStudent Success');
      // console.log('postResponse', postResponse.body);
    };
    main();
  });
  return <div className={`${styles.container}`}>1</div>;
};

export default Main;
