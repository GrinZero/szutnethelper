import { useEffect } from 'react';

import styles from './Main.module.scss';

const Main = () => {
  useEffect(() => {
    // console.log('Main');
  });
  return <div className={`${styles.container}`}>1</div>;
};

export default Main;
