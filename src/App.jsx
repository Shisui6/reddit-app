import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './features/Header/Header';
import Feed from './features/Feed/Feed';
import Subreddits from './features/Subreddits/Subreddits';

function App() {
  return (
    <>
      <Header />
      <main>
        <div>
          <Feed/>
        </div>
        <div>
          <Subreddits/>
        </div>
      </main>
    </>
  );
}

export default App;
