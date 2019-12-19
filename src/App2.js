import React, { useContext } from 'react';
import { ApplicationContext } from './ApplicationProvider';

window.addEventListener(
  'App1Event',
  function(e) {
    console.log(`App1Event ${e.data}`);
  },
  false
);

function App2() {
  const { mySharedState, setMySharedState } = useContext(ApplicationContext);

  const sendToSecondApp = e => {
    setMySharedState('Hi I am Shared Stated Altered from APP 2');
    const event = new Event('App2Event');
    event.data = 'bla';
    window.dispatchEvent(event);
  };
  return (
    <>
      <div className="App2">
        Hi I am app 2{' '}
        <button onClick={sendToSecondApp}>Send something from app 2</button>
      </div>
      <h4>this is the current Shared state in app2: {mySharedState}</h4>
    </>
  );
}

export default App2;
