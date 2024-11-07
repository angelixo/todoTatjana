import React from 'react';
import { NavBar } from './sections/Navbar';
import { UserProvider } from './contexts/userContext';
import { UserProfileSection } from './sections/UserProfileSection';
import { ToDoSection } from './sections/TodoSection';

import './App.css';

function App() {

  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <div className="content">
          <UserProfileSection />
            <ToDoSection />
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
