import { useState } from "react"

function CreatePostForm(props){

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    let handleSubmit = (event) => {
        event.preventDefault()
        
        if(title === "" || content == ""){
            alert("Title and Content are required!")
        } else {
            console.log(title, content)
            props.onNewSubmit({title,content})
            setTitle("")
            setContent("")
        }    
    }

    let handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    let handleContentChange = (event) => {
        setContent(event.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label for="titleInfo">Title</label>
            <input type="text" name="titleInfo" onChange={handleTitleChange} value={title}/>
            <br/>
            <label for="contentInfo">Content</label>
            <input type="text" name="contentInfo" onChange={handleContentChange} value={content}/>
            
            <br/>
            <br/>

            <input type="submit" disabled={title === "" || content === ""}/>
        </form>
    )
}

export default CreatePostForm