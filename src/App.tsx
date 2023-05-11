import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import './App.scss';
import './components/login/Login.scss'
import { useAppSelector } from './app/hooks';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallBack } from "./utils/ErrorFallBack"

function App() {

  const user = useAppSelector((state) => state.user.user);

  return (
    <div className="App">
      {user ? (
        <>
          <ErrorBoundary FallbackComponent={ErrorFallBack}>
            <Sidebar />
          </ErrorBoundary>
          <Chat />
        </>
      ) : <><Login /></>}
    </div>
  );
}

export default App;
