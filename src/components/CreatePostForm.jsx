import { useState } from 'react'

function CreatePostForm(props){

    const [postTitle, setPostTitle] = useState("")
    const [postContent, setPostContent] = useState("")

    const handleTitleChange = (event) => {
        setPostTitle(event.target.value)
    }

    const handleContentChange = (event) => {
        setPostContent(event.target.value)
    }


    return(
        <form onSubmit={(event)=> {
            event.preventDefault()

            if(postTitle != ""){
                props.handleSubmit({title: postTitle, content: postContent})
            } else{
                alert("posts need a message")
            }
        
        }} >
        <label>
        <h3>Title</h3>
        <input type="text" onChange={handleTitleChange} value={postTitle}/>
        </label>

        <label>
        <h3>Content</h3>
        <input type="text" onChange={handleContentChange} value={postContent}/>
        </label>
       
        <br></br>
        <br></br>
        <input type="submit"/>
        </form>
       
    )
}

export default CreatePostForm