import { useState } from 'react';
import App from './App.jsx';
import App2 from './App2.jsx';

const Root = () => {
  const [showApp2, setShowApp2] = useState(false);

  const toggleApp = () => setShowApp2(prev => !prev);

  return (
    <>
      {showApp2 ? <App2 toggleApp={toggleApp} /> : <App toggleApp={toggleApp} />}
    </>
  );
};

export default Root;

