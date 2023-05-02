import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import './App.scss';
import './components/login/Login.scss'

function App() {

  const user = null;

  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : <><Login /></>}
    </div>
  );
}

export default App;
