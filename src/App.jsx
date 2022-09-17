import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './features/Header/Header';
import Feed from './features/Feed/Feed';
import Profile from './features/Profile/Profile';
import ScrollButton from './components/ScrollButton/ScrollButton';
import SubredditList from './features/SubredditList/SubredditList';


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
          <SubredditList/>
        </div>
      </main>
      <div>
        <ScrollButton/>
      </div>
    </>
  );
}

export default App;
