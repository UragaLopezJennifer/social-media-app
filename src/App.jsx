import './App.css'
import React, { useState } from 'react';

import Post from './components/Post';
import CreatePostForm from './components/CreatePostForm';
import Feed from './components/Feed';

function App(){

  let [newPost, setNewPost] = useState([])

  let handleNewSubmission = (data) => {
    setNewPost([...newPost, data])
  }

  return(
    <div>
      <h1>Fakebook!</h1>
        <CreatePostForm handleSubmit={handleNewSubmission} />
        <Feed data={newPost}/>
        
    </div> 
  )
}

export default App
