import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './features/Header/Header';
import Feed from './features/Feed/Feed';
import Subreddits from './features/Subreddits/Subreddits';
import Profile from './features/Profile/Profile';
import ScrollButton from './components/ScrollButton';

function App() {
  return (
    <>
      <Header />
      <div className='profile-comp'>
        <Profile/>
      </div>
      <main>
        <div>
          <Feed/>
        </div>
        <div>
          <Subreddits/>
        </div>
      </main>
      <div>
        <ScrollButton/>
      </div>
    </>
  );
}

export default App;
