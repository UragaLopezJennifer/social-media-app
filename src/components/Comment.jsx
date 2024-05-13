import React from 'react';

function Comment(props){
  
  let renderList = () => {
    console.log(props.data)
    return props.data.map((data, i) => {
        return <p key={i}>{data}</p>
    })
  }
  return(
    <div classname="comments">
      {renderList()}
    </div> )
}

export default Comment