import React, { useState } from 'react';
import Comment from './Comment';

function CommentForm(props){
  const [comment, setComment] = useState("")

  return(
    <form onSubmit={(event)=> {
      event.preventDefault()
      props.onNewReply(comment)
    }}>
      <textarea placholder='Add your comment!' onChange={(event)=> {
        setComment(event.target.value)
      }} value={comment} />

      <input type="submit"/>

    </form>
  )
}

function Post(props){
  const [likes, setLikes] = useState(0);
  
  let [comments, setComments] = useState([])

  let handleComment = (comment) => {
    console.log(comment)
    setComments([...comments, comment])
  }

  function handleLike(){
    setLikes(likes + 1);
}
  return(
    <div>
      <h3>{props.title}</h3>
      <h4>{props.content}</h4>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>

      <div>
        <h4>Comments</h4>
        <CommentForm onNewReply={handleComment}/>
        <Comment data={comments}/>
      </div>
</div> )
}
export default Post
