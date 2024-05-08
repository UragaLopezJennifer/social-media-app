import './App.css'
import React from 'react';

import Post from './components/Post';
import CreatePostForm from './components/CreatePostForm';

import { useState } from 'react'

function App(){

  const [newPost, setNewPost] = useState([])

  let handleNewSubmission = (data) => {
    setNewPost([...newPost, data])
  }

  return(
    <div>
      <h1>Fakebook!</h1>
        <CreatePostForm onNewSubmit={handleNewSubmission} />
        {/* CreatePostForm */}
        {/* Feed */}
        <Post content="This is a test post!" />
        <Post content="This is another test post!" />
    </div> )
}

export default App
