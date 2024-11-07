import React from 'react';
import { NavBar } from './components/Navbar';
import { UserProvider } from './contexts/userContext';
import { UserProfileSection } from './sections/UserProfileSection';
import { ToDoSection } from './sections/TodoSection';

import './App.css';
import { TodoProvider } from './contexts/TodoReducer';

function App() {

  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <div className="content">
          <UserProfileSection />
          <TodoProvider>
            <ToDoSection />
          </TodoProvider>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
