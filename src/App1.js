import React, { useContext } from 'react';
import { ApplicationContext } from './ApplicationProvider';

window.addEventListener(
  'App2Event',
  function(e) {
    console.log(`App2Event ${e.data}`);
  },
  false
);

function App1() {
  const { mySharedState, setMySharedState } = useContext(ApplicationContext);

  const sendToFirstApp = e => {
    setMySharedState('Hi I am Shared Stated Altered from APP 1');
    const event = new Event('App1Event');
    event.data = 'bla';
    window.dispatchEvent(event);
  };

  return (
    <>
      <div className="App1">
        Hi I am app 1{' '}
        <button onClick={sendToFirstApp}>Send something from app 1</button>
      </div>
      <h4>this is the current Shared state in app1: {mySharedState}</h4>
    </>
  );
}

export default App1;
