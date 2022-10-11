import Button from './Button';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function Hello() {
  useEffect(() => {
    console.log('hi :)');
    return () => console.log('bye :(');
  }, []);
  return <h1>Hello!!</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing(prev => !prev);
  };

  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      {showing ? <Hello /> : null}
      {/* <button onClick={onClick}>show</button> */}
      <Button onClick={onClick} text={'Continue'} />
    </div>
  );
}

export default App;
