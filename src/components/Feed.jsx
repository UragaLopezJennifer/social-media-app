import Post from './Post';

function Feed(props) {

let renderPost = () => {
    return props.data.map((data, index) => {
         return <Post key={index} title={data.title} content={data.content} />
    })
}

return(
    <div> 
        {renderPost()}
    </div>
)

}

export default Feed