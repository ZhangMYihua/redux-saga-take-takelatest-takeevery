import React from 'react';

import User from './components/user/user.component';
import Post from './components/post/post.component';

import './App.css';

const App = props => {
  return (
    <div className='App'>
      <User userId={5} />
      <Post postId={15} />
    </div>
  );
};

export default App;
